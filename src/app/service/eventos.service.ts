import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarvelApiService } from './marvel-api.service';

@Injectable({
  providedIn: 'root'
})
export class EventosService extends MarvelApiService {

  constructor(http: HttpClient) {
    super(http);
  }

  getEvents(pageIndex: number, pageSize: number) {
    return this.get<any[]>('events', pageIndex, pageSize);
  }
}
