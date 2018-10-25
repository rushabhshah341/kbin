import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CollaboratoryComponent } from './collaboratory/collaboratory.component';
import { RbiComponent } from './rbi/rbi.component';
import { KfComponent } from './kf/kf.component';
import { PostCollaboratoryComponent } from './post-collaboratory/post-collaboratory.component';
import { ContributorsComponent } from './contributors/contributors.component';
import { LoginComponent } from './login/login.component';
import { HeaderLoginComponent } from './header-login/header-login.component';
import { SignupComponent } from './signup/signup.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'collaboratory', component: CollaboratoryComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    CollaboratoryComponent,
    RbiComponent,
    KfComponent,
    PostCollaboratoryComponent,
    ContributorsComponent,
    LoginComponent,
    HeaderLoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
