import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductComponent} from './product.component';
import {RouterModule, Routes} from '@angular/router';
import {PortletModule} from '../../shares/portlet/portlet.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {ActionProductComponent} from './action-product/action-product.component';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {MultiSelectModule} from 'primeng/multiselect';
import {ButtonModule} from 'primeng/button';
import {FileUploadModule} from 'primeng/fileupload';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxSpinnerModule} from 'ngx-spinner';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {TranslateModule} from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
  },
  {
    path: 'add',
    component: ActionProductComponent,
  },
];

@NgModule({
  declarations: [
    ProductComponent,
    ActionProductComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PortletModule,
    NgxPaginationModule,
    NgbModule,
    Ng2SmartTableModule,
    TranslateModule,
    DropdownModule,
    InputTextModule,
    MultiSelectModule,
    ButtonModule,
    FileUploadModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    TranslateModule,
  ],
})
export class ProductsModule {
}
