import {Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoriesService} from '../../../@core/services/_service/categories.service';
import {ToastrService} from 'ngx-toastr';
import {NgxSpinnerService} from 'ngx-spinner';
import {TranslateService} from '@ngx-translate/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'ngx-action',
  templateUrl: './action-category.component.html',
  styleUrls: ['./action-category.component.scss'],
})
export class ActionCategoryComponent implements OnInit {

  @ViewChild('inputFile') inputFile: ElementRef;
  @Input() category: any;
  @Input() action: any;
  formSave: FormGroup;
  isSubmitted = false;
  fileName: string;
  pathImage: string;
  pathDefault = '../../assets/images/download.jfif';
  files: File;

  constructor(
    private _ngbActiveModal: NgbActiveModal,
    private fb: FormBuilder,
    private service: CategoriesService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private translate: TranslateService,
  ) {
    spinner.hide();
  }

  ngOnInit(): void {
    this.initForm();
  }

  ngAfterViewInit(): void {
    if (this.category) {
      this.inputFile.nativeElement.value = this.category.fileName;
    }
  }

  close() {
    this._ngbActiveModal.close();
  }

  initForm() {
    if (this.action) {
      this.formSave = this.fb.group({
        name: ['', Validators.required],
        description: [''],
        multipartFile: [this.files],
        isCurrent: [''],
      });
    } else {
      this.pathImage = this.category.urlImg;
      this.formSave = this.fb.group({
        id: [this.category.id],
        guid: [this.category.guid],
        name: [this.category.name, Validators.required],
        description: [this.category.description],
        multipartFile: [this.files],
        urlImg: [this.category.urlImg],
        isCurrent: [this.category.current],
      });
    }
  }

  get f() {
    return this.formSave.controls;
  }

  processSaveOrUpdate() {
    this.isSubmitted = true;
    if (this.formSave.valid) {
      this.spinner.show();
      this.service.saveOrUpdate(this.formSave.value).subscribe(res => {
        this.spinner.hide();
        if (res.code === 'success') {
          this.toastr.success(
            this.translate.instant('message.add.success'),
          );
          this._ngbActiveModal.close('success');
        } else {
          this.toastr.error(
            this.translate.instant(res.code),
          );
        }
      }, error => {
        this.spinner.hide();
        // console.log(error.message);
      });
    }
  }

  processSelectFile(event: any) {
    const fileName = event.target.value.replace('C:\\fakepath\\', '');
    this.inputFile.nativeElement.value = fileName;
    const render = new FileReader();
    render.onload = () => {
      this.pathImage = render.result.toString();
    };
    render.readAsDataURL(event.target.files[0]);
    this.formSave.patchValue({
      multipartFile: event.target.files[0],
    });
  }
}
