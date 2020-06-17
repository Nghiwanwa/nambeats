import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumComponent } from './application/album/album.component';
import { ArtistComponent } from './application/artist/artist.component';
import { ArtistSingleComponent } from './application/artist-single/artist-single.component';
import { PlayListComponent } from './application/play-list/play-list.component';
import { FreeMusicComponent } from './application/free-music/free-music.component';
import { YourMusicComponent } from './application/your-music/your-music.component';
import { DownloadComponent } from './application/download/download.component';
import { FavouriteComponent } from './application/favourite/favourite.component';
import { HistoryComponent } from './application/history/history.component';
import { ShopComponent } from './application/shop/shop.component';
import { ShopSingleComponent } from './application/shop-single/shop-single.component';
import { BlogComponent } from './application/blog/blog.component';
import { BlogSingleComponent } from './application/blog-single/blog-single.component';
import { ContactComponent } from './application/contact/contact.component';
import { PricingComponent } from './application/pricing/pricing.component';
import { Home2Component } from './application/home2/home2.component';
import { SignupComponent } from './application/signup/signup.component';
import { LoginComponent } from './application/login/login.component';
import { ResetComponent } from './application/reset/reset.component';
import { EventsComponent } from './application/events/events.component';
import { EventsSingleComponent } from './application/events-single/events-single.component';
import { NavComponent } from './application/nav/nav.component';
import { FooterComponent } from './application/footer/footer.component';
import { TopnavComponent } from './application/topnav/topnav.component';
import { HomeComponent } from './application/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    ArtistComponent,
    ArtistSingleComponent,
    PlayListComponent,
    FreeMusicComponent,
    YourMusicComponent,
    DownloadComponent,
    FavouriteComponent,
    HistoryComponent,
    ShopComponent,
    ShopSingleComponent,
    BlogComponent,
    BlogSingleComponent,
    ContactComponent,
    PricingComponent,
    Home2Component,
    SignupComponent,
    LoginComponent,
    ResetComponent,
    EventsComponent,
    EventsSingleComponent,
    NavComponent,
    FooterComponent,
    TopnavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
