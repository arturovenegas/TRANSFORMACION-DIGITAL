import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  url = 'https://superhero-search.p.rapidapi.com/api/heroes';
  token = 'afd8b06950msh7c1b94e8fc29191p173588jsn75e4ed732a1d';
  constructor(private http: HttpClient) { }

  getHeroes(): Observable<any>{
    return this.http.get<any>(this.url + '?access-token=' + this.token);
  }

  getHeroe(id: number){
    return this.http.get<any>(this.url + '/' + id + '?access-token=' + this.token);
  }
}
