import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  imgNum: number[] = [1, 2, 3, 1, 2, 3];
  bsModalRef: BsModalRef | undefined | any ;
  selectedImageUrl: string | undefined;

  constructor(private modalService: BsModalService) {}

    openImageModal(template: any, imageUrl: string) {
      this.selectedImageUrl = imageUrl;
      this.bsModalRef = this.modalService.show(template);
  }

  






}
