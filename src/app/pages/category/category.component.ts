import {Component, Inject, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ActionCategoryComponent} from './action-category/action-category.component';
import {CategoriesService} from '../../@core/services/_service/categories.service';
import {TranslateService} from '@ngx-translate/core';
import {DeleteComponent} from './delete/delete.component';
import {DEFAULT_MODAL_OPTIONS} from '../../@core/app-config';
import {Category} from '../../@core/utils/category';

@Component({
  selector: 'ngx-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  total: any;
  listCategories: Array<Category> = [];
  lstDel: Array<Category> = [];

  constructor(
    private modal: NgbModal,
    private service: CategoriesService,
    private translate: TranslateService,
  ) {
  }

  ngOnInit(): void {
  }

  reset() {
    this.lstDel = [];
    this.processSearchData(null);
  }

  add() {
    const modalRef = this.modal.open(ActionCategoryComponent, DEFAULT_MODAL_OPTIONS);
    modalRef.componentInstance.action = true;
    modalRef.result.then(value => {
      if (value === 'success')
        this.reset();
    }, (reason) => {
    });

  }

  delete() {
    const modalRef = this.modal.open(DeleteComponent, DEFAULT_MODAL_OPTIONS);
    modalRef.componentInstance.objDel = this.lstDel;
    modalRef.result.then(value => {
      if (value === 'success') {
        this.processSearchData(null);
      }
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  processEdit(item: any) {
    const modalRef = this.modal.open(ActionCategoryComponent, DEFAULT_MODAL_OPTIONS);
    modalRef.componentInstance.category = item;
    modalRef.componentInstance.action = false;
    modalRef.result.then(value => {
      if (value === 'success')
        this.reset();
    }, (reason) => {
    });
  }

  processSearchData(event?: any) {
    this.service.search(null, event).subscribe(res => {
      this.listCategories = res.data;
      this.total = res.recordsTotal;
    });
  }

  public processSearch(event: any) {
    this.processSearchData(event);
  }
}
