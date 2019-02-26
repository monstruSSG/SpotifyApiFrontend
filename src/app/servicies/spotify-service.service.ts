import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Track } from '../models/trackModel';
import { Artist } from '../models/artistModel';
import { Genres } from '../models/genresModel';
import { User } from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class SpotifyServiceService {

  private static bearerToken = '';

  private clientId = 'a96d0d7e5ddd46a09de7698a2035c6c3';
  private redirectUri = 'http://localhost:4200/';
  private spotifyAuthorizeUrl = 'https://accounts.spotify.com/authorize';
  private spotifyBaseApiUrl = 'https://api.spotify.com/v1/';

  constructor(
    private http: HttpClient,
  ) { }



  getUserDetails(): Observable<User> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + SpotifyServiceService.bearerToken
    });

    const url = this.spotifyBaseApiUrl + 'me';

    return this.http.get<User>(url, {headers: headers}).pipe(map(user => user));
  }

  getTracks(trackIds: string): Observable<Track[]> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + SpotifyServiceService.bearerToken
    });

    const endPoint = this.spotifyBaseApiUrl + 'tracks/?ids=' + trackIds;


    return this.http.get<Track[]>(endPoint, { headers: headers }).pipe(map(res => res));
  }

  getArtistTopTracks(artistId: string) : Observable<Track[]> {
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer ' + SpotifyServiceService.bearerToken
    })
    
    const endPoint = this.spotifyBaseApiUrl + 'artists/' + artistId + '/top-tracks' + '?market=from_token';

    return this.http.get<Track[]>(endPoint, { headers: headers}).pipe(map(res => res));
  }

  getArtists(searchString: string, type = 'artist') {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + SpotifyServiceService.bearerToken
    });

    const endPoint = this.spotifyBaseApiUrl + 'me/top/tracks';

    return this.http.get<Artist[]>(endPoint, { headers: headers }).pipe(map(res => res));

  }


  getRecomandations(genres: Genres): Observable<Track[]> {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + SpotifyServiceService.bearerToken
    });
    const endPoint = this.spotifyBaseApiUrl + 'recommendations?' +
    'seed_genres=' + genres.genres[0] + ',' + genres.genres[1] + ',' + genres.genres[2] + '&limit=50';

    return this.http.get<Track[]>(endPoint, { headers: headers }).pipe(map(recom => recom));
  }

  getGenres(): Observable<Genres> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + SpotifyServiceService.bearerToken
    });

    const endPoint = this.spotifyBaseApiUrl + 'recommendations';

    return this.http.get<Genres>(endPoint + '/available-genre-seeds', { headers: headers }).pipe(map(genres => {
      console.log(genres);
      return genres;
    }));
  }


  authorizeLogin() {
    const scopes = 'user-top-read user-read-recently-played playlist-read-collaborative user-library-modify';
    const fullAuthorizeLink = this.spotifyAuthorizeUrl + '?response_type=token' + '&client_id=' + this.clientId +
      '&redirect_uri=' + this.redirectUri +
      '&scope=' + scopes;
    location.href = fullAuthorizeLink;
  }

  setToken(token: string) {
    SpotifyServiceService.bearerToken = token;
  }

  isAuthenticated(): boolean {
    return !!SpotifyServiceService.bearerToken;
  }

}
