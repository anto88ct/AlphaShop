import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbtron',
  templateUrl: './jumbtron.component.html',
  styleUrls: ['./jumbtron.component.css'],
})
export class JumbtronComponent implements OnInit {
  @Input() titolo?: string;
  @Input() sottotitolo?: string;
  @Input() show: boolean = true;
  constructor() {}

  ngOnInit(): void {}
}
