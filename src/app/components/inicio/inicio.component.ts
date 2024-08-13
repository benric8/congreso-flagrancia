import { Component, OnInit, } from '@angular/core';
import {  faPhone , faLocationDot, faEnvelope, faMarker } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { environment } from 'src/environments/environment';
import { PonenteService } from 'src/app/services/ponente-service/ponente.service';
import { DataPonentes, Ponente } from 'src/app/models/ponentes';
declare const configVideo: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit  {

  constructor(private ponentesService:PonenteService){}
  faPhone = faPhone;
  faLocationDot = faLocationDot;
  faEnvelope = faEnvelope;
  faMarker = faMarker;
  
  faFacebook = faFacebook;
  faWhatsapp = faWhatsapp;
  urlRegistro = environment.urlFormRegistro;
  
  urlPdf = environment.pathPrograma;

  currentDate :Date = new Date();

  ponentesInternacionales:Array<Ponente>=[];
  ponentesNacionales:Array<Ponente>=[];
  dataPonentes:DataPonentes={nacionales:[],internacionales:[]};
  getPonentes=():void=>{
    this.ponentesService.getPonentes().subscribe({
      next:(response)=>{
        this.dataPonentes=response;
        
        this.ponentesInternacionales=this.dataPonentes.internacionales;
        this.ponentesNacionales=this.dataPonentes.nacionales;
        console.log(this.ponentesInternacionales);
      },
      error:(err)=>console.log(err)
    })
  }

  ngOnInit(): void {
    configVideo();
    this.getPonentes();
   
  }

  registrarseClick():void{
    this.goLinkExterno(this.urlRegistro);
  }

  verProgramaClick():void{
    this.goLinPdf(this.urlPdf);
  }

  goLinPdf(url:string){
    window.open(url, "_blank");
  }

  goLinkExterno(url:string){
    window.open(url, "_blank");
  }
}
