import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarvelApiService } from './marvel-api.service';

@Injectable({
  providedIn: 'root'
})
export class CharactersService extends MarvelApiService {

  constructor(http: HttpClient) {
    super(http);
  }

  getCharacters(pageIndex: number, pageSize: number) {
    return this.get<any[]>('characters', pageIndex, pageSize);
  }
}
