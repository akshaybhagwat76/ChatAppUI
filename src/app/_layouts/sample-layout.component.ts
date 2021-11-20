import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sample-layout',
  templateUrl: './sample-layout.component.html',
  styleUrls: ['./sample-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SampleLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  ngOnDestroy(): void { }
}
