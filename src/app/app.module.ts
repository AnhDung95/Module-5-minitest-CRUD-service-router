import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
