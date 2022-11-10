import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteGeneratorComponent } from './quote-generator/quote-generator.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicesService } from './services.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteGeneratorComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
    
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
