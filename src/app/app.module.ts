import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { ImportarModule } from './importar/importar.module';
import { HomeModule } from './home/home.module';
import { MovimentosModule } from './movimentos/movimentos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MovimentosModule,
    PoModule,
    HttpClientModule,
    AppRoutingModule,
    ImportarModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
