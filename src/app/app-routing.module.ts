import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './modules/general/home/home.component';
import {NotFoundComponent} from './modules/general/not-found/not-found.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent,},
  {
    path: '',
    loadChildren: () => import('./articles/article.module')
      .then(mod => mod.ArticleModule)
  },

  {
    path: 'websites',
    loadChildren: () => import('./websites/websites.module')
      .then(mod => mod.WebsitesModule)
  },
  {
    path: 'httpclient',
    loadChildren: () => import('./modules/application/items/items.module')
      .then(mod => mod.ItemsModule)
  },
  {
    path: 'template-driven-forms',
    loadChildren: () => import('./modules/application/example-template-driven-forms/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'components',
    loadChildren: () => import('./modules/application/example-components/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./modules/application/example-services/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'reactive-form',
    loadChildren: () => import('./modules/application/example-reactive-form/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'bootstrap-prototype',
    loadChildren: () => import('./modules/application/example-bootstrap-prototype/example-bootstrap-prototype.module')
      .then(mod => mod.ExampleBootstrapPrototypeModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/general/contact/contact.module')
      .then(mod => mod.ContactModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/general/about/about.module')
      .then(mod => mod.AboutModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./modules/general/signin/signin.module')
      .then(mod => mod.SigninModule)
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
