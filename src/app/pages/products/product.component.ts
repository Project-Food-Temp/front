import {Component, OnInit} from '@angular/core';
import {Category} from '../../@core/utils/category';
import {ProductService} from '../../@core/services/_service/product.service';
import {ToastrService} from 'ngx-toastr';
import {TranslateService} from '@ngx-translate/core';
import {FormGroup} from '@angular/forms';


@Component({
  selector: 'ngx-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  total: any;
  listData: any[] = [];
  lstDel: any[] = [];
  isSubmitted: boolean = false;
  formSearch: FormGroup;

  constructor(
    private service: ProductService,
    private toastr: ToastrService,
    private translate: TranslateService,
  ) {
  }

  ngOnInit(): void {
  }

  add() {
  }

  processDelete() {
  }

  get f() {
    return this.formSearch.controls;
  }

  processSearch(event: any) {
    this.processSearchData(event);
  }

  processSearchData(event?: any) {
    this.service.search(null, event).subscribe(res => {
      this.listData = res.data;
      this.total = res.recordsTotal;
    });
  }

  processEdit(item: any) {
  }

}
