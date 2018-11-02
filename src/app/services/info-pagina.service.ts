import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina-interfaces';


@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada: boolean = false;

  constructor(private http:HttpClient) {
    console.log("Servicio de página listo");
    //leer Json 
        //obteniendo peticion http de mi pagina json
        this.http.get("assets/data/data-pagina.json")
        //Usando el suscribe 
                 .subscribe( (resp: InfoPagina)=> {
                   this.cargada = true;
                   this.info = resp;
                   console.log(resp);
                 });
   }
}
