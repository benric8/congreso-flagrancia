import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ponente } from 'src/app/models/ponentes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PonenteService {
 
  constructor(private http:HttpClient ) { }
  private jsonUrl = 'assets/data/ponentes.json';
  getPonentes=():Observable<any>=>{
    return this.http.get(this.jsonUrl);
  }
}
