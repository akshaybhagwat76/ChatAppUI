import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import swal from 'sweetalert2'

@Component({
  selector: 'sample-modal',
  templateUrl: './sample-modal.component.html',
  styleUrls: ['./sample-modal.component.scss']
})
export class SampleModalComponent implements OnInit {
  @Input() close: any;

  constructor(private toastr: ToastrService, private modal: NgbModal) { }

  ngOnInit(): void { }

  save() {
    swal.fire({
      allowEnterKey: false,
      allowEscapeKey: false,
      allowOutsideClick: false,
      text: "Kaydetmek istediğinize emin misiniz?",
      showConfirmButton: true,
      confirmButtonText: 'Evet',
      cancelButtonText: 'İptal',
      showCancelButton: true,
      icon: "question"
    }).then((r) => {
      if (r.isConfirmed) {
        this.toastr.success("Kaydedildi.");
        this.modal.dismissAll();
      } 
    });
  }
}