import { Component, inject } from '@angular/core';
import { Firestore, collectionData, collection, doc, setDoc, getDoc, addDoc, deleteDoc, DocumentData, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { FirebaseControlService} from "src/app/services/firebase-control.service";

@Component({
  selector: 'app-our-client',
  templateUrl: './our-client.component.html',
  styleUrls: ['./our-client.component.css']
})
export class OurClientComponent {
  ourClientArticels = [,]
  firestore: Firestore = inject(Firestore);

  imageHolder: any;
  pageCounter: number = 0;
  pageArray: any[] = [];
  pageItemArray: any[] = [];

  constructor(private fbs: FirebaseControlService) {
    this.t();
  }
  async t() {
    let pageItemlength = 9;
    // dynamic update needed
    let result = await this.fbs.queryCondition('/yungFolder/ourClient/clientReference', 100, "name", "!=", 'null','name');
    for (let i = 0; i < result.length; i++) {
      let subArray = []
      for (let j = 0; j < pageItemlength; j++) {
        i++;
        console.log(i);
        subArray.push(result[i]);
      }
      this.pageItemArray.push(subArray);
    }
  }
  pageSwitch(direction: number) {
    const maxPageIndex = this.pageItemArray.length + 0;
    let ans = this.pageCounter + direction;
  
    if (ans >= 0 && ans < maxPageIndex) {
      console.log(ans);
      this.pageCounter = ans;
    } else if (ans < 0) {
      ans = this.pageItemArray.length;
      console.log(ans);
      this.pageCounter = ans;
    } else {
      console.log(ans);
      this.pageCounter = 0;
    }
  }
  viewImage(imageRef: any) {
    this.imageHolder = imageRef;
  }
  viewImageList(imageRef: any[]) {
  }
}
