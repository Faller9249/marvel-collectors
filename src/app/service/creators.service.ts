import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarvelApiService } from './marvel-api.service';

@Injectable({
  providedIn: 'root'
})
export class CreatorsService extends MarvelApiService {

  constructor(http: HttpClient) {
    super(http);
  }

  getCreators(pageIndex: number, pageSize: number) {
    return this.get<any[]>('creators', pageIndex, pageSize);
  }
}
