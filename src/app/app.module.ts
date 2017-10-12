import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DocenteComponent } from './docente/docente.component';
import {DocenteService} from "./docente/docente.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    DocenteComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      HttpClientModule,
  ],
  providers: [DocenteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
