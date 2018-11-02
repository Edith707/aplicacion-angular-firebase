import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina-interfaces';


@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada: boolean = false;
  equipo: any[] = [];

  constructor(private http:HttpClient) {
    this.cargarInfo();  
    this.cargarEquipo();  
   }

   private cargarInfo(){
     //obteniendo peticion http de mi pagina json
     this.http.get("assets/data/data-pagina.json")
     //Usando el suscribe 
              .subscribe( (resp: InfoPagina)=> {
                this.cargada = true;
                this.info = resp;
              });
   }

   private cargarEquipo() {
        //obteniendo peticion http de mi pagina json mi path es mi url de firebase
        this.http.get("https://edith-portfolio.firebaseio.com/equipo.json")
        //Usando el suscribe 
                 .subscribe( (resp:any[])=> {
                   this.cargada = true;
                   this.equipo= resp;
                   console.log(resp);
                 });
   }
}
