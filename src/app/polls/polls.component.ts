import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PollsProjectService } from '../polls-project.service';
import { pollsStructure } from '../models/polls-structure';
import { moreOptions } from '../models/polls-options';


@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css']
})
export class PollsComponent implements OnInit {
  addedOptions = new moreOptions();
  pollQuestions: pollsStructure[] = [];
  providedOptions = [];//Add new options
  multiSelect: boolean = false;
  slug: string = "";
  count: number = 0;
  result: string = "";
  showResponse : boolean = false;
  success: boolean = false;

  newOptions = [];

  constructor(private pollsProjectService: PollsProjectService) { }

  ngOnInit(): void {
  }

  addOption(){
    this.addedOptions = new moreOptions();
    this.newOptions.push(this.addedOptions);
    this.count++;
  }

  createPoll(formData){
    //console.log(formData.optionOne);

    //Add the options in 'providedOptions' array 

    if(this.count == 0){
      let optionOne ={};
      optionOne["text"] = formData.optionOne;//optionOne object to be added

      let optionTwo ={};
      optionTwo["text"] = formData.optionTwo;//optionTwo object to be added

      //Push the option objects in providedOptions
      this.providedOptions.push(optionOne);
      this.providedOptions.push(optionTwo);

      //Creation of new Poll
      const polls = new pollsStructure(
        formData.slug,
        formData.question,
        this.multiSelect,
        this.providedOptions
      );

      this.slug = formData.slug;
      
      //Call the poll creation service 
      this.pollsProjectService.pollCreation(polls).subscribe(
        (data: any) => {
          this.success = true,
          this.showResponse = true,
          this.result= "https://polls.zubku.site/polls/"+this.slug;
        //console.log(data);
        },
        (err: any)=>{
          this.success = true,
          this.showResponse = true
          this.result = "Error has occured";
        })

    }
    else {
      let optionOne ={};
      optionOne["text"] = formData.optionOne;//optionOne object to be added

      let optionTwo ={};
      optionTwo["text"] = formData.optionTwo;//optionTwo object to be added

      this.providedOptions.push(optionOne);
      this.providedOptions.push(optionTwo);

      
      for(let i =0; i< this.newOptions.length; i++){
        //console.log(this.newOptions[i].answer);
        let newOption ={};
        newOption["text"] = this.newOptions[i].answer;
        this.providedOptions.push(newOption);
      }

      const polls = new pollsStructure(
        formData.slug,
        formData.question,
        this.multiSelect,
        this.providedOptions
      );

      //console.log(polls);

      this.slug = formData.slug;

       //Call the poll creation service 
      this.pollsProjectService.pollCreation(polls).subscribe(
        (data: any) => {
          this.success = true,
          this.showResponse = true,
          this.result= "https://polls.zubku.site/polls/"+this.slug;
        //console.log(data);
        },
        (err: any)=>{
          this.success = false,
          this.showResponse = true
          this.result = "Error has occured";
        })
    }
    

    //console.log(polls);

   
    /*
    */
  }

}
