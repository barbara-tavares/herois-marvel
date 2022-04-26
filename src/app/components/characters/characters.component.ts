import { Component, OnInit } from '@angular/core';
import { CharactersModel } from 'src/app/models/characters.model';
import { MarvelApiService } from 'src/app/services/marvel-api.service';
import { ComicsCharacterItemsModel } from 'src/app/models/comics-character.model';
import { forkJoin } from 'rxjs';
import { ComicsModel } from '../../models/comics.model';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters: CharactersModel[];
  comicsCharacters: ComicsModel[] = []; 

  constructor(private marvelApiService: MarvelApiService) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.marvelApiService.getCharacters().subscribe((data) => {
      this.characters = data;
      console.log(this.characters);

      this.characters.forEach((character)=> {
        this.getComicsItems(character.comics.items);

      }) 

    });
  }

  getComicsItems(items: Array<ComicsCharacterItemsModel>) {
    forkJoin(
      items.map((item) => this.marvelApiService.getComicByUrl(item.resourceURI))
    ).subscribe((resp) => {
      console.log(`Retorno items api marvel: `, resp);
      resp.map((comicItem) => {
        comicItem.map((comic) => {
          console.log(comic.title);
          console.log(comic.description);
          this.comicsCharacters.push(comic);
        });

      })
    });
  }
}

// Jesus passou por aqui