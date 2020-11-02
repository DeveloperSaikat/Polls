import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PolldataResolverService } from './polldata-resolver.service';
import { AllpolldataResolverService } from './allpolldata-resolver.service';
import { PollsComponent } from './polls/polls.component';
import { PollsMainComponent } from './polls-main/polls-main.component';
import { PollResolvedComponent } from './poll-resolved/poll-resolved.component';
import { PollCheckComponent } from './poll-check/poll-check.component';
import { PollsNotfoundComponent } from './polls-notfound/polls-notfound.component';

const routes: Routes = [
  {
    path: '', redirectTo: "/home", pathMatch: "full"
  },
  {
    path: 'home', 
    component: PollsMainComponent
  },
  {
    path: 'polls', 
    component: PollsComponent
  },
  {
    path: 'resolve/:slug', 
    component: PollResolvedComponent,
    resolve: { slugData : PolldataResolverService ,
               allData: AllpolldataResolverService}
  },
  {
    path: 'polls/:slug', 
    component: PollCheckComponent
  },
  {
    path: 'lost', 
    component: PollsNotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
