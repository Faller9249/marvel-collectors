import { TelaStoriesComponent } from './components/tela-stories/tela-stories.component';
import { TelaSeriesComponent } from './components/tela-series/tela-series.component';
import { TelaEventosComponent } from './components/tela-eventos/tela-eventos.component';
import { TelaCreatorsComponent } from './components/tela-creators/tela-creators.component';
import { TelaComicsComponent } from './components/tela-comics/tela-comics.component';
import { TelaHomeComponent } from './components/tela-home/tela-home.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaCharactersComponent } from './components/tela-characters/tela-characters.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'home',
        component: TelaHomeComponent
      },{
        path: 'personagens',
        component: TelaCharactersComponent
      },{
        path: 'comics',
        component: TelaComicsComponent
      },{
        path: 'creatos',
        component: TelaCreatorsComponent
      },{
        path: 'events',
        component: TelaEventosComponent
      },{
        path: 'series',
        component: TelaSeriesComponent
      },{
        path: 'stories',
        component: TelaStoriesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
