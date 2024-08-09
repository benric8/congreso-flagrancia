import { Component, OnInit, } from '@angular/core';
import {  faPhone , faLocationDot, faEnvelope, faMarker } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';
declare const configVideo: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit  {

  faPhone = faPhone;
  faLocationDot = faLocationDot;
  faEnvelope = faEnvelope;
  faMarker = faMarker;
  
  urlRegistro = environment.urlFormRegistro;
  
  urlPdf = environment.pathPrograma;

  currentDate :Date = new Date();

  ngOnInit(): void {
    configVideo();
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
    window.open("//" + url, "_blank");
  }
}
