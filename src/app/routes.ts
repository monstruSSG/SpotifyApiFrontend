import { HomeComponent } from './home/home.component';
import { ArtistAlbumTrackFormComponent } from './artist-album-track-form/artist-album-track-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArtistPlaylistComponent } from './artist-playlist/artist-playlist.component';

export const ROUTES = [
    { path: '', component: HomeComponent },
    { path: 'search', component: ArtistAlbumTrackFormComponent },
    { path: 'artistplaylist/:id', component: ArtistPlaylistComponent},
    { path: '**', component: NotFoundComponent }
];
