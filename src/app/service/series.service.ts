import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarvelApiService } from './marvel-api.service';

@Injectable({
  providedIn: 'root'
})
export class SeriesService extends MarvelApiService {

  constructor(http: HttpClient) {
    super(http);
  }

  getSeries(pageIndex: number, pageSize: number) {
    return this.get<any[]>('series', pageIndex, pageSize);
  }
}
