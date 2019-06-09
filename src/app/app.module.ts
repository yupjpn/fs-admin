import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { UsersComponent } from './components/users/users.component';
import { ServiceProviderComponent } from './components/service-provider/service-provider.component';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    UsersComponent,
    ServiceProviderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
