export interface ComicsCharacterModel {
  available: number;
  collectionURI: string;
  items: Array<ComicsCharacterItemsModel>;
  returned: number;
}

export interface ComicsCharacterItemsModel {
  name: string;
  resourceURI: string;
}