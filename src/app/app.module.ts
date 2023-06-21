import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompComponent } from './comp/comp.component';
import { BindingComponent } from './binding/binding.component';
import { Directive1Component } from './directive1/directive1.component';
import { NewComponent } from './new/new.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FooterComponent } from './footer/footer.component';
import{TestService} from './test.service';
import { DctDirective } from './dct.directive'




@NgModule({
  declarations: [
    AppComponent,
    CompComponent,
    BindingComponent,
    Directive1Component,
    NewComponent,
    FooterComponent,
    DctDirective,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
