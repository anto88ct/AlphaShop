import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  utente: string = '';
  titoloLogin: string = 'accesso e autenticazione';
  sottotitoloLogin: string = 'procedi ad inserire userid e passwd';
  constructor(protected route: ActivatedRoute) {}

  ngOnInit(): void {
    this.utente = this.route.snapshot.params['userid'];
  }
}
