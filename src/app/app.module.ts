import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
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
import { HeaderLoginComponent } from './header-login/header-login.component';
import { AccountModule } from './account/account.module';
import { Storage } from "./services/storage.service";
import { SearchBarComponent } from './search-bar/search-bar.component';

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
    HeaderLoginComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountModule,
    HttpClientModule
  ],
  providers: [ 
    Storage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
