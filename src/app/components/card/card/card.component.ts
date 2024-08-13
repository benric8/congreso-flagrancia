import { Component, Input } from '@angular/core';
import { Ponente } from 'src/app/models/ponentes';
import { PonenteService } from 'src/app/services/ponente-service/ponente.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  @Input() ponentes!:Array<Ponente>;
  
}
