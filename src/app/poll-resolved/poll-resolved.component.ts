import { Component, OnInit } from '@angular/core';
import { PollsProjectService } from '../polls-project.service';
import { pollsStructure } from '../models/polls-structure';
import { pollsVote } from '../models/polls-vote';
import { myVote} from '../models/polls-opinion';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-poll-resolved',
  templateUrl: './poll-resolved.component.html',
  styleUrls: ['./poll-resolved.component.css']
})
export class PollResolvedComponent implements OnInit {

  questions: pollsStructure;
  showResults : boolean = false;
  btnShow : boolean = false;
  slug : string = "";
  ourVotes = [];
  allOptions : any[] = [];
  allVotes : any[] = [];
  chartOptions : any[] = [];
  chartVotes : any[] = [];
  chartOfVotes = [];
  chartData: pollsVote = {
    slug: "",
    question: "",
    multiSelect: false,
    votes: 0,
    options : []
  };
  thisQuestion: pollsVote = {
    slug: "",
    question: "",
    multiSelect: false,
    votes: 0,
    options : []
  };
  multipleEnable: boolean = false;
  selectedItems: any[] = [];
  optionIds : any[] = [];
  result: string = "";
  showResponse : boolean = false;
  success: boolean = false;
  count : number = 0;

  constructor(private pollsProjectService: PollsProjectService,
              private route : ActivatedRoute) { }

  ngOnInit(): void {
    //check for change in slug in URL
    this.route.data.subscribe(
      data => {
        this.thisQuestion = data['slugData'];//Assign the data to 'thisQuestion'
        this.slug = this.thisQuestion.slug;
        this.multipleEnable = this.thisQuestion.multiSelect;
        //console.log(this.thisQuestion);

        for(let i = 0; i < this.thisQuestion.options.length; i++){
          this.allOptions.push(this.thisQuestion.options[i].text);
          this.allVotes.push(this.thisQuestion.options[i].votes);
          this.optionIds.push(this.thisQuestion.options[i].id);
          //console.log(this.thisQuestion.options[i].id);
        }
        
      }
    )

    //get all the polls in the platform
    this.route.data.subscribe(
      data => {
        this.questions = data['allData']
      }
    )
  }

  getAnswers(e: any, id: string){
    if(e.target.checked){
      //console.log(id + "checked");
      this.selectedItems.push(id);
    }
    else{
      //console.log(id + "not checked");
      this.selectedItems = this.selectedItems.filter(m => m! = id);
    }
  }



  votePoll(formData){
    if(this.multipleEnable){
      this.btnShow = true;//Displays the show result button
      for(let i =0; i<this.selectedItems.length; i++){
        this.ourVotes.push(this.selectedItems[i]);  
      }
      //initialise the vote provided inside array
      //console.log(this.selectedItems);
    }
    else{
      this.btnShow = true;//Displays the show result button
      this.ourVotes.push(formData.answer);//initialise the vote provided inside array
      //console.log(formData.answer);
    }
     

      //creating the object as desired
      const votes = new myVote(
        this.ourVotes
      );

      //console.log(votes);

      //Put call to send our vote to the backend
      this.pollsProjectService.voteOpinion(this.slug, votes).subscribe(
        (data : any) => {
          this.success = true,
          this.showResponse = true,
          this.result = "Vote successfully submitted"

          this.fetchData()
        },
        (err: any) => {
          this.success = false,
          this.showResponse = true,
          this.result = "It seems you have already submitted earlier"

          this.fetchData()
        }
      )

      this.showResults = true;

      //this.chartData();
      //this.createChart();
      
  
  }


  fetchData(){
    this.count++;

      if(this.count===1){
        this.pollsProjectService.getPoll(this.slug).subscribe(
          (data: any)=>{
            this.chartData = data;//Assign the data to 'thisQuestion'
            console.log(this.chartData.options.length);
    
            for(let i = 0; i < this.chartData.options.length; i++){
              this.chartOptions.push(this.chartData.options[i].text);
              this.chartVotes.push(this.chartData.options[i].votes);
              //console.log(this.thisQuestion.options[i].id);
            }
          }
        )
      }

      this.createChart();
  }


  createChart(){
    let canvas = <HTMLCanvasElement> document.getElementById('canvasVotes');
    this.chartOfVotes = new Chart(canvas, {
          type: 'bar',
          data: {
              labels: this.chartOptions,
              datasets: [{
                  label: 'Votes',
                  data: this.chartVotes,
                  backgroundColor: [
                    'rgba(0, 230, 64, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                  ],
                  borderWidth: 3,
              }]
            },
            options: {
              maintainAspectRatio: false,
              scales: {
                yAxes: [{
                    ticks: {
                      fontSize: 18,
                      padding: 0,
                      fontColor: '#000',
                      precision : 0
                    }
                }],
                xAxes: [{
                  ticks:{
                    fontSize: 18,
                    padding: 0,
                    fontColor: '#000'
                 }
              }]
            }
            }
            
      });
  }

}
