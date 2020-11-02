import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PollsComponent } from './polls/polls.component';
import { PollsMainComponent } from './polls-main/polls-main.component';

import { PollsProjectService } from './polls-project.service';
import { PolldataResolverService } from './polldata-resolver.service';
import { AllpolldataResolverService } from './allpolldata-resolver.service';

import { PollResolvedComponent } from './poll-resolved/poll-resolved.component';
import { PollCheckComponent } from './poll-check/poll-check.component';
import { PollsNotfoundComponent } from './polls-notfound/polls-notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    PollsComponent,
    PollsMainComponent,
    PollResolvedComponent,
    PollCheckComponent,
    PollsNotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PollsProjectService, PolldataResolverService, AllpolldataResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
