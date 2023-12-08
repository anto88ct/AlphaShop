import { Component, OnInit } from '@angular/core';
import { Articoli } from 'src/app/models/articoli.models';
import { ArticoliService } from 'src/app/service/articoli.service';

@Component({
  selector: 'app-grid-articoli',
  templateUrl: './grid-articoli.component.html',
  styleUrls: ['./grid-articoli.component.css']
})
export class GridArticoliComponent implements OnInit {

  articoli$: Articoli[] = [];

  constructor(private articoliService: ArticoliService) { }

  ngOnInit(): void {
    //prendo gli articoli con il service e li passo ad una variabile
    this.articoli$ = this.articoliService.getArticoli(); //this.articoli$ = this.articoli(service)
    console.log(this.articoli$);
  }

  handleEdit = (codart: string) => {
    console.log("clicked edit of "+ codart);
  }

  handleDelete = (codart: string) => {
    console.log("clicked delete of", codart);
    //elimino dall'array articoli$ cio che cliccko (findIndex come filter)
    this.articoli$.splice(this.articoli$.findIndex(x => x.codart === codart), 1)
  }
}
