import {Component, OnInit} from '@angular/core';
import {CharactersModel} from 'src/app/models/characters.model';
import {MarvelApiService} from 'src/app/services/marvel-api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters: CharactersModel[];

  constructor(private marvelApiService: MarvelApiService) {}

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.marvelApiService.getCharacters().subscribe((data) => {
      this.characters = data;
      console.log(this.characters);
    });
  }
}
