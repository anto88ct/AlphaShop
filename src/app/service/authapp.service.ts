import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthappService {
  constructor() {}

  autentica = (userid: string, password: string): boolean => {
    let result = userid === 'Antonio' && password === '1234' ? true : false;
    if (result) {
      //memorizzaiamo userId in session storage
      sessionStorage.setItem('Utente', userid);
    }
    return result;
  };

  getLoggedUser = (): string | null => ((sessionStorage.getItem('Utente')) ? sessionStorage.getItem('Utente') : '');
  //se sessionStorage.getItem('Utente') = true ritorna sessionStorage.getItem('Utente') altrimenti ""

  isLogged = (): boolean => ((sessionStorage.getItem('Utente')) ? true : false);
  //se sessionStorage.getItem('Utente') = true ritorna true altrimenti false

  clearUser = (): void => sessionStorage.removeItem("Utente");

  clearAll = (): void => sessionStorage.clear();
}
