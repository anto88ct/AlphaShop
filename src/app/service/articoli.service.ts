import { Injectable } from '@angular/core';
import { Articoli } from '../models/articoli.models';

@Injectable({
  providedIn: 'root'
})
export class ArticoliService {
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
      imageUrl: '../../assets/images/image-1.jpg'
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
      imageUrl: '../../assets/images/image-2.jpg'
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
      imageUrl: '../../assets/images/image-3.jpg'
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
      imageUrl: '../../assets/images/image-4.jpg'
    }
  ];
  constructor() { }

  getArticoli = () : Articoli[] => this.articoli;

  getArticoliByCode = (codart: string): Articoli => {
    const index = this.articoli.findIndex(articoli => articoli.codart === codart);
    //come il filter, in base aòll'index troviamo l'articolo con il suo codart (codice)
    return this.articoli[index];
  }
}
