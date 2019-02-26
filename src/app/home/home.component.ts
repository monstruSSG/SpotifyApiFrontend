import { Component, OnInit } from '@angular/core';
import { SpotifyServiceService } from '../servicies/spotify-service.service';
import { Genres } from '../models/genresModel';
import { Track } from '../models/trackModel';
import { ActivatedRoute, Router } from '@angular/router';
import { Artist } from '../models/artistModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  genres : Genres;
  tracks: Track[];
  artist : Artist;

  constructor(private spotifyService: SpotifyServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }


  ngOnInit() {
    const beginSplit = window.location.hash.slice('#access_token='.length);
    const beginLen = '#access_token='.length;
    const finalSplit = window.location.hash.slice(beginLen, window.location.hash.length - '&token_type=Bearer&expires_in=3600'.length);
    this.spotifyService.setToken(finalSplit);

    this.getRecGenres();
  }

  onLogin() {
    this.spotifyService.authorizeLogin();
  }

  getRecGenres() {
    this.spotifyService.getGenres().subscribe(genres => this.genres = genres);
  }


  getRecomandations() {
    this.spotifyService.getRecomandations(this.genres).subscribe(res => {
      this.tracks = res.tracks;
    });
  }

  navigate(track: Track) {
    this.router.navigate(['artistplaylist/' + track.artists[0].id])
  }



}
