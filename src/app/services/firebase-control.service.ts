import { Injectable, inject } from '@angular/core';
import { Firestore, collectionData, collection, updateDoc, getDocFromCache, deleteDoc } from '@angular/fire/firestore';
import { DocumentData, WhereFilterOp, addDoc, doc, getDoc, getDocs, limit, orderBy, query, setDoc, where } from "firebase/firestore";
import { Storage, getStorage, provideStorage, ref, uploadBytesResumable, getDownloadURL } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseControlService {
  firestore: Firestore = inject(Firestore);
  private storage: Storage = inject(Storage);

  constructor() {
    console.log('firebase control');
  }
  t(address: string) {
    return collectionData(collection(this.firestore, address));
  }
  async queryCondition(
    address: string,
    amountLimit: number,
    condton1: string,
    condton2: WhereFilterOp,
    condton3: string,
    orderby: string | 'name' | 'date') {
    const q = await query(
      collection(this.firestore, address),
      where(condton1, condton2, condton3),
      orderBy(orderby),
      limit(amountLimit));
    const querySnapshot = await getDocs(q);
    let result: DocumentData[] = [];
    querySnapshot.forEach((doc) => {
      result.push({ id: doc.id, data: doc.data() });
    });
    return result
  }
  async readDoc(address: string, id: string) {
    const docRef = await doc(this.firestore, address, id);
    try {
      const doc = await getDocFromCache(docRef);
      console.log("Cached document data:", doc.data());
      return doc
    } catch (e) {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return { id: docSnap.id, data: docSnap.data() };
      } else {
        console.warn("No such document found");
      }
      return e
    }
  }
  getCollectionValueChange(address: string) {
    const itemCollection = collection(this.firestore, address);
    return collectionData(itemCollection) as Observable<any[]>
  }
}

export interface firebaseObject {
  name: string,
  content?: any[],
}
export interface fireObject {
  name: string,
  id: string,
  content?: any[],
}

interface f1 {
  tag: string[],
  ct1: string,
}

interface f2 {
  ct2: string,
}