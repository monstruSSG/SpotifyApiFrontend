import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-album-track-form',
  templateUrl: './artist-album-track-form.component.html',
  styleUrls: ['./artist-album-track-form.component.css']
})
export class ArtistAlbumTrackFormComponent implements OnInit {

  searchOption = 'Song';

  constructor() { }

  ngOnInit() {
  }

  onSelect() {
    console.log(this.searchOption);
  }
}
