import { Injectable } from '@angular/core';
import { PollsProjectService } from './polls-project.service';
import { RouterStateSnapshot, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { pollsStructure } from './models/polls-structure';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllpolldataResolverService implements Resolve<pollsStructure>{

  constructor(private pollsProjectService: PollsProjectService) { }

  resolve(route: ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<pollsStructure>{
    return this.pollsProjectService.getAllPolls();
  }
}
