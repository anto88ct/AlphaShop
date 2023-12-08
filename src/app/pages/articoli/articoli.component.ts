import { Component, OnInit } from '@angular/core';
import { Articoli } from '../../models/articoli.models';
import { ArticoliService } from 'src/app/service/articoli.service';

@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.css'],
})
export class ArticoliComponent implements OnInit {
  articoli: Articoli[] = [
    {
      codart: '123456776',
      descrizione: 'BARILLA FARINA 1 KG',
      um: 'PZ',
      pzcart: 24,
      peso: 1,
      prezzo: 1.09,
      active: true,
      data: new Date(),
      imageUrl: '/src/assets/images/image-1.jpeg'
    },
    {
      codart: '456768788',
      descrizione: 'BARILLA PASTA GR 500',
      um: 'PZ',
      pzcart: 56,
      peso: 8,
      prezzo: 5.5,
      active: true,
      data: new Date(),
      imageUrl: '/src/assets/images/image-2.jpeg'
    },
    {
      codart: '123456776',
      descrizione: 'FINDUS PESCE 4 KG',
      um: 'PZ',
      pzcart: 38,
      peso: 6,
      prezzo: 5.19,
      active: true,
      data: new Date(),
      imageUrl: '/src/assets/images/image-3.jpeg'
    },
    {
      codart: '123456776',
      descrizione: 'FINDUS 3 GR',
      um: 'PZ',
      pzcart: 84,
      peso: 7,
      prezzo: 8.59,
      active: true,
      data: new Date(),
      imageUrl: '/src/assets/images/image-4.jpeg'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
