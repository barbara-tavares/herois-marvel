import {ThumbnailModel} from './thumbnail.model';
import {UrlModel} from './url.model';
import {ComicsCharacterModel} from './comics-character.model';

export interface CharactersModel {
  comics: ComicsCharacterModel;
  description: string;
  events: any;
  id: number;
  modified: string;
  name: string;
  resourceURI: string;
  series: any;
  stories: any;
  thumbnail: ThumbnailModel;
  urls: UrlModel;
}
