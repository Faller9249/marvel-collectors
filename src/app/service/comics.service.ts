import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarvelApiService } from './marvel-api.service';

@Injectable({
  providedIn: 'root'
})
export class ComicsService extends MarvelApiService {

  constructor(http: HttpClient) {
    super(http);
  }

  getComics(pageIndex: number, pageSize: number) {
    return this.get<any[]>('comics', pageIndex, pageSize);
  }
}
