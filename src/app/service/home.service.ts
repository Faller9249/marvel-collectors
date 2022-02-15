import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  quatidade: string = '&limit=100&offset=0&';
  //page = 'characters'
  constructor(private http: HttpClient,

    ) { }

    getApiCharacter(pageIndex: any, pageSize:any){
      return this.http.get<any>(environment.apiUrl +  "characters"  +`?ts=03092020&apikey=4a87d2e8a360beb58858c5057fa1e1ea&hash=bcb75203a6d8a5b17370eab020cba35f` + this.quatidade);
    }

    getApiComics(pageIndex: any, pageSize:any){
      return this.http.get<any>(environment.apiUrl +  "comics"  +`?ts=03092020&apikey=4a87d2e8a360beb58858c5057fa1e1ea&hash=bcb75203a6d8a5b17370eab020cba35f` + this.quatidade);
    }

    getApiCreators(pageIndex: any, pageSize:any){
      return this.http.get<any>(environment.apiUrl +  "creators"  +`?ts=03092020&apikey=4a87d2e8a360beb58858c5057fa1e1ea&hash=bcb75203a6d8a5b17370eab020cba35f` + this.quatidade);
    }

    getApiEventos(pageIndex: any, pageSize:any){
      return this.http.get<any>(environment.apiUrl +  "events"  +`?ts=03092020&apikey=4a87d2e8a360beb58858c5057fa1e1ea&hash=bcb75203a6d8a5b17370eab020cba35f` + this.quatidade);
    }

    getApiStories(pageIndex: any, pageSize:any){
      return this.http.get<any>(environment.apiUrl +  "stories"  +`?ts=03092020&apikey=4a87d2e8a360beb58858c5057fa1e1ea&hash=bcb75203a6d8a5b17370eab020cba35f` + this.quatidade);
    }
    getApiSeries(pageIndex: any, pageSize:any){
      return this.http.get<any>(environment.apiUrl +  "series"  +`?ts=03092020&apikey=4a87d2e8a360beb58858c5057fa1e1ea&hash=bcb75203a6d8a5b17370eab020cba35f` + this.quatidade);
    }
}
