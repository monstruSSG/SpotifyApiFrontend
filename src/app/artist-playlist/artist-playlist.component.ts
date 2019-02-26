import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import { SpotifyServiceService } from '../servicies/spotify-service.service';
import { Track } from '../models/trackModel';
import { HomeComponent } from '../home/home.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist-playlist',
  templateUrl: './artist-playlist.component.html',
  styleUrls: ['./artist-playlist.component.css']
})
export class ArtistPlaylistComponent implements OnInit {


  id: string;

  @Input() 
  artistId: string;
  
  constructor(
    private spotifyService: SpotifyServiceService,
    private activatedRoute: ActivatedRoute
    ) { }

  topTracks: Track[];
  

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'];
    });

    this.getArtistTrack();
  }

  getArtistTrack()
  {
    this.spotifyService.getArtistTopTracks(this.id).subscribe(res => {this.topTracks = res.tracks; console.log(this.topTracks);});
    
  }

}
