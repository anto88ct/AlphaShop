import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthappService } from '../../service/authapp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userId: string = '';
  password: string = '';
  autenticato: boolean = true;
  errMsg: string = 'Spiacente, userId e Passwd sono errati';
  titoloLogin: string = 'accesso e autenticazione';
  sottotitoloLogin: string = 'procedi ad inserire userid e passwd';

  constructor(protected route: Router, private auth: AuthappService) {}

  ngOnInit(): void {}

  submit() {
    console.log(this.userId);

    if (this.auth.autentica(this.userId, this.password)) {
      this.route.navigate(['welcome', this.userId]);
      this.autenticato = true;
    } else {
      this.autenticato = false;
    }
  }
}
