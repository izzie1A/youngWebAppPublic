import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { AdminEditPageComponent } from './slides/admin-edit-page/admin-edit-page.component';
import { ContactUsComponent } from './slides/contact-us/contact-us.component';
import { OurClientComponent } from './slides/our-client/our-client.component';
import { OurTeamComponent } from './slides/our-team/our-team.component';
// import { YungCertGallaryComponent } from "src/app/yung-cert-gallary/yung-cert-gallary.component";
import { HomePageComponent } from './slides/home-page/home-page.component';
import { OurProjectComponent } from './slides/our-project/our-project.component';
import { OurProjectCategoriesComponent } from './slides/our-project-categories/our-project-categories.component';
import { OurProjectDetailComponent } from './slides/our-project-detail/our-project-detail.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'ourProjectDetail/:id', component: OurProjectDetailComponent, data: { animation: 'ourProjectDetail' },
  },
  {
    path: 'OurProjectCategoriesComponent/:id', component: OurProjectCategoriesComponent, data: { animation: 'ourProjectDetail' },
    children: [
      { path: ':name', component: OurProjectDetailComponent, },
    ],
  },
  { path: 'homepage', component: HomePageComponent, data: { animation: 'homepage' }, },
  { path: 'ourProject', component: OurProjectComponent, },
  { path: 'ourTeam', component: OurTeamComponent, data: { animation: 'ourTeam' }, },
  { path: 'ourClient', component: OurClientComponent, data: { animation: 'ourClient' }, },
  { path: 'contactUs', component: ContactUsComponent, data: { animation: 'contactUs' }, },
  { path: '**', component: HomePageComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
