import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';

import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CounterModule, HeroesModule, DbzModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
