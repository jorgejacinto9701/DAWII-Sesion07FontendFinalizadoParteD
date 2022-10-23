import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { Docente } from '../models/docente.model';

const baseUrl =  AppSettings.API_ENDPOINT + "/docente";

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  constructor(private http: HttpClient) { }

  listaDocente(nombre:string, dni:string, idUbigeo:number,
     estado:number, fechaInicio:string, fechaFin:string):Observable<any>{
      
      const params = new HttpParams().
        set("nombre", nombre).
        set("dni", dni).
        set("idUbigeo", idUbigeo).
        set("estado", estado).
        set("fechaInicio", fechaInicio).
        set("fechaFin", fechaFin);  

      return this.http.get(baseUrl +"/listaDocenteConParametros", {params} );
  }
  
  actualizaDocente(aux:Docente):Observable<any>{
      return this.http.put(baseUrl, aux);
  }
  
}

