import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { pollsVote } from './models/polls-vote';
import { PollsProjectService } from './polls-project.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolldataResolverService implements Resolve<pollsVote>{

  constructor(private pollsProjectService: PollsProjectService) { }

  resolve(route: ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<pollsVote>{
    let slug = route.params['slug'];
    return this.pollsProjectService.getPoll(slug);
  }
}
