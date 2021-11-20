import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sample-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class SampleHeaderComponent implements OnInit {
  @ViewChild('testModal', { static: true }) testModal: TemplateRef<any>;

  constructor(private modal: NgbModal) { }

  ngOnInit(): void { }

  openModal() {
    this.modal.open(this.testModal, { backdropClass: 'bg-transparent', backdrop: 'static', keyboard: false, windowClass: 'custom-modal' });
  }
}