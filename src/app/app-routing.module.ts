import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent }    from './page-not-found/page-not-found.component';
import { CollaboratoryComponent } from './collaboratory/collaboratory.component';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';
import { HomeComponent } from './home/home.component';
import { RbiComponent } from './rbi/rbi.component';
import { KfComponent } from './kf/kf.component';
import { PostCollaboratoryComponent } from './post-collaboratory/post-collaboratory.component';
import { ContributorsComponent } from './contributors/contributors.component';
import { LoginComponent } from './account/login/login.component';
import { SignupComponent } from './account/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'collaboratory',
    component: CollaboratoryComponent,
    pathMatch: 'full'
  },
  {
    path: 'rbi',
    component: RbiComponent,
    pathMatch: 'full'
  },
  {
    path: 'post-collaboratory',
    component: PostCollaboratoryComponent,
    pathMatch: 'full'
  },
  {
    path: 'kf',
    component: KfComponent,
    pathMatch: 'full'
  },
  {
    path: 'contributors',
    component: ContributorsComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false, // <-- debugging purposes only
    preloadingStrategy: SelectivePreloadingStrategyService,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
