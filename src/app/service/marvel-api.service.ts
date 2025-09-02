import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {
  private readonly API_URL = environment.apiUrl;
  private readonly AUTH_PARAMS = `?ts=03092020&apikey=4a87d2e8a360beb58858c5057fa1e1ea&hash=bcb75203a6d8a5b17370eab020cba35f`;

  constructor(private http: HttpClient) { }

  protected get<T>(path: string, pageIndex: number, pageSize: number) {
    const pagination = `&limit=${pageSize}&offset=${pageIndex * pageSize}`;
    const url = `${this.API_URL}${path}${this.AUTH_PARAMS}${pagination}`;

    return this.http.get<any>(url).pipe(
      map(response => response.data.results as T)
    );
  }
}
