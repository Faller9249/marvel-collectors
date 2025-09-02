import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarvelApiService } from './marvel-api.service';

@Injectable({
  providedIn: 'root'
})
export class StoriesService extends MarvelApiService {

  constructor(http: HttpClient) {
    super(http);
  }

  getStories(pageIndex: number, pageSize: number) {
    return this.get<any[]>('stories', pageIndex, pageSize);
  }
}
