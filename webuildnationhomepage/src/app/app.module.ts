import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LefttopComponent } from './lefttop/lefttop.component';
import { RighttopComponent } from './righttop/righttop.component';
import { RightbottomComponent } from './rightbottom/rightbottom.component';
import { LeftbottomComponent } from './leftbottom/leftbottom.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component'

import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LefttopComponent,
    RighttopComponent,
    RightbottomComponent,
    LeftbottomComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
