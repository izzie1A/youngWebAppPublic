import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FbItemCardComponent } from './components/firebase-components/fb-item-card/fb-item-card.component';
import { FbItemCardDetailComponent } from './components/firebase-components/fb-item-card-detail/fb-item-card-detail.component';
import { FbItemCardDialogComponent } from './components/firebase-components/fb-item-card-dialog/fb-item-card-dialog.component';
import { FbItemCardListComponent } from './components/firebase-components/fb-item-card-list/fb-item-card-list.component';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './slides/home-page/home-page.component';
import { ContactUsComponent } from './slides/contact-us/contact-us.component';
import { SignInComponent } from './slides/sign-in/sign-in.component';
import { ProjectComponent } from './slides/project/project.component';
import { ProjectDetailComponent } from './slides/project-detail/project-detail.component';
import { OurProjectComponent } from './slides/our-project/our-project.component';
import { OurProjectCategoriesComponent } from './slides/our-project-categories/our-project-categories.component';
import { OurProjectDetailComponent } from './slides/our-project-detail/our-project-detail.component';
import { OurTeamComponent } from './slides/our-team/our-team.component';
import { OurClientComponent } from './slides/our-client/our-client.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { YungCertGallaryComponent } from './slides/yung-cert-gallary/yung-cert-gallary.component';

@NgModule({
  declarations: [
    AppComponent,
    FbItemCardComponent,
    FbItemCardDetailComponent,
    FbItemCardDialogComponent,
    FbItemCardListComponent,
    ImageViewerComponent,
    NavBarComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ContactUsComponent,
    SignInComponent,
    ProjectComponent,
    ProjectDetailComponent,
    OurProjectComponent,
    OurProjectCategoriesComponent,
    OurProjectDetailComponent,
    OurTeamComponent,
    OurClientComponent,
    YungCertGallaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
