import { Component, OnInit } from '@angular/core';
import { AuthappService } from 'src/app/service/authapp.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public auth: AuthappService) {}

  ngOnInit(): void {}
}
