import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ResultComponent } from './result/result.component';
import { TeamComponent } from './team/team.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GameComponent } from './game/game.component';
import { CompareComponent } from './compare/compare.component';
import { NumberConverterPipe } from './number-converter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResultComponent,
    TeamComponent,
    GameComponent,
    CompareComponent,
    NumberConverterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
