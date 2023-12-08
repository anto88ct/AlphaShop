import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Articoli } from 'src/app/models/articoli.models';

@Component({
  selector: 'app-articoli-card',
  templateUrl: './articoli-card.component.html',
  styleUrls: ['./articoli-card.component.css']
})
export class ArticoliCardComponent implements OnInit {

  constructor() { }
  @Input() articolo: Articoli = {
    codart: '',
    descrizione: '',
    um: '',
    pzcart: 0,
    peso: 0,
    prezzo: 0,
    active: true,
    data: new Date(),
    imageUrl: ''
  };

  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();
  ngOnInit(): void {
  }

  //event emitter, quando clicckiamo farà scattare l'evento anche lato componente padre (grid-card-componente)
  //in grid-componente (padre) sono presenti infatti
  //(delete)="handleDelete($event)"
  //(edit)="handleEdit($event)"
  editArt = () => this.edit.emit(this.articolo.codart); //passiamo codice articolo
  deleteArt = () => this.delete.emit(this.articolo.codart);
}
