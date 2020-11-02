import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { pollsStructure } from './models/polls-structure';
import { pollsVote } from './models/polls-vote';
import { myVote } from './models/polls-opinion';

@Injectable({
  providedIn: 'root'
})
export class PollsProjectService {

  pollsURL: string = "https://test.zubku.site";
  
  constructor(private http: HttpClient) { }

  //create a new poll
  pollCreation(poll: pollsStructure): Observable<pollsStructure>{
    console.log(poll);
    return this.http.post<pollsStructure>(this.pollsURL+"/polls", poll,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

  //get all polls present in our platform
  getAllPolls(): Observable<pollsStructure>{
    return this.http.get<pollsStructure>(this.pollsURL+"/polls",{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

  getPoll(slug : string): Observable<pollsVote>{
    return this.http.get<pollsVote>(this.pollsURL+"/polls/"+slug,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

  checkPoll(slug : string){
    return this.http.head(this.pollsURL+"/polls/"+slug,{
      observe: 'response'
    })
  }
  

  voteOpinion(slug : string, votes : myVote): Observable<pollsVote>{
    return this.http.put<pollsVote>(this.pollsURL+"/polls/"+slug, votes,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }
}
