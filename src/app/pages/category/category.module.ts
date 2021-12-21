import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CategoryComponent} from './category.component';
import {ActionCategoryComponent} from './action-category/action-category.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxSpinnerModule} from 'ngx-spinner';
import {TableModule} from 'primeng/table';
import {PortletModule} from '../../shares/portlet/portlet.module';
import {TranslateModule} from '@ngx-translate/core';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {DeleteComponent} from './delete/delete.component';
import {TooltipModule} from 'primeng/tooltip';
import {InputTextModule} from 'primeng/inputtext';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
  },
];

@NgModule({
  declarations: [
    ActionCategoryComponent,
    CategoryComponent,
    DeleteComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NgxSpinnerModule,
    TableModule,
    PortletModule,
    TranslateModule,
    MessagesModule,
    MessageModule,
    TooltipModule,
    InputTextModule,
  ],
})
export class CategoryModule {
}
