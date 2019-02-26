import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { HomeComponent } from './home/home.component';
import { ArtistAlbumTrackFormComponent } from './artist-album-track-form/artist-album-track-form.component';
import { NotFoundComponent } from './not-found/not-found.component';

// import the routes
import { ROUTES } from './routes';
import { ArtistDescriptionComponent } from './artist-description/artist-description.component';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ArtistPlaylistComponent } from './artist-playlist/artist-playlist.component';
import { SongDescriptionComponent } from './song-description/song-description.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ArtistAlbumTrackFormComponent,
    NotFoundComponent,
    ArtistDescriptionComponent,
    ArtistPlaylistComponent,
    SongDescriptionComponent,
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
