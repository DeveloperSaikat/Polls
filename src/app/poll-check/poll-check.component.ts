import { Component, OnInit } from '@angular/core';
import { PollsProjectService } from '../polls-project.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-poll-check',
  templateUrl: './poll-check.component.html',
  styleUrls: ['./poll-check.component.css']
})
export class PollCheckComponent implements OnInit {

  constructor(private pollsProjectService: PollsProjectService,
              private route : ActivatedRoute,
              private router : Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.pollsProjectService.checkPoll(params.get('slug')).subscribe(
          (data : any) => {
            if(data.status === 200){
              this.router.navigate(['/resolve/'+params.get('slug')])
            }
          },
          err => {
            if(err.status === 404){
              this.router.navigate(['/lost']);
            }
          });
      }
    )

    
  }

}
