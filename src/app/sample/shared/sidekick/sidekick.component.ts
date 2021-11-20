import { Component, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Services } from 'src/app/Services';

@Component({
  selector: 'app-sample-sidekick',
  templateUrl: './sidekick.component.html',
  styleUrls: ['./sidekick.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SampleSidekickComponent implements OnInit, OnDestroy {
  results:any;
  constructor(@Inject(DOCUMENT) private document: Document,private _Service: Services) { }

  ngOnInit(): void { 
    this._Service.getCustomerList().subscribe(result => {
      this.results=result;
    });
  }

  ngOnDestroy(): void { }

  toggleSidekick() {
    const st = this.document.body.getElementsByClassName('sidekick-toggler')[0];

    const sk = this.document.body.getElementsByClassName('sidekick-panel')[0];
    sk.classList.toggle('sidekick-open');

    const sk2 = this.document.body.getElementsByClassName('sidekick-sample')[0];
    sk2.classList.toggle('sidekick-open');

    const pc = this.document.body.getElementsByClassName('page-content')[0];
    pc.classList.toggle('text');

    const sk3 = this.document.body.getElementsByClassName('sidekick-body')[0];
    sk3.classList.toggle('sidekick-body-open');

    const sk4 = this.document.body.getElementsByClassName('sidekick-toggler')[0];
    sk4.classList.toggle('sidekick-toggler-open');

    const sk5 = this.document.body.getElementsByClassName('sidekick-toggler-sample')[0];
    sk5.classList.toggle('sidekick-toggler-open');

    const sk6 = this.document.body.getElementsByClassName('menuwrapper')[0];
    sk6.classList.toggle('menuwrapper-open');
  }
}