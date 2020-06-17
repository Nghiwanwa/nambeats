import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './application/contact/contact.component';
import { AlbumComponent } from './application/album/album.component';
import { ArtistComponent } from './application/artist/artist.component';
import { BlogComponent } from './application/blog/blog.component';
import { DownloadComponent } from './application/download/download.component';
import { EventsComponent } from './application/events/events.component';
import { FavouriteComponent } from './application/favourite/favourite.component';
import { HistoryComponent } from './application/history/history.component';
import { LoginComponent } from './application/login/login.component';
import { ResetComponent } from './application/reset/reset.component';
import { ShopComponent } from './application/shop/shop.component';
import { SignupComponent } from './application/signup/signup.component';
import { NavComponent } from './application/nav/nav.component';
import { FooterComponent } from './application/footer/footer.component';
import { Home2Component } from './application/home2/home2.component';
import { TopnavComponent } from './application/topnav/topnav.component';
import { HomeComponent } from './application/home/home.component';





const routes: Routes = [
  {
    path:"album",
    component:AlbumComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"artist",
    component:ArtistComponent
  },
  {
    path:"blog",
    component:BlogComponent
  },
  {
    path:"download",
    component:DownloadComponent
  },
  {
    path:"events",
    component:EventsComponent
  },
  {
    path:"favourite",
    component:FavouriteComponent
  },
  {
  path:"history",
  component:HistoryComponent
  },
  {
    path:"login",
    component:LoginComponent
    },
    {
    path:"reset",
    component:ResetComponent
    },
    {
      path:"shop",
      component:ShopComponent
      },
      {
        path:"signup",
        component:SignupComponent
      },
     
      {
        path:"reset",
        component:ResetComponent
      },
      {
        path:"signup",
        component:SignupComponent
      },
      {
        path:"nav",
        component:NavComponent
      },
      {
        path:"footer",
        component:FooterComponent
      },
      {
        path:"home2",
        component:Home2Component
      },
      {
        path:"home",
        component:HomeComponent
      },
      {
        path:"topnav",
        component:TopnavComponent
      },
      
  {
    path: '',
    redirectTo:'/home2',
    pathMatch:'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }






