import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  displayView: number = 1;

  constructor() { }

  ngOnInit(): void { }

  ngOnDestroy(): void { }
}
