import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
  // styles: ['h6{color:red}']
})
export class GoalComponent implements OnInit {
  goals:Goal[] = [
    new Goal(1, 'become a front end developer', 'ensure everithing made is visualy appyling',new Date(2019,3,14)),
    new Goal(2,'become problem solver','try to solve all the problem',new Date(2022,3,10)),
    new Goal(3,'become software designer','come up with every unique application',new Date(2020,3,18)),
    new Goal(4,'become back end developer','be the reason to why thing go smotoh',new Date(2022,3,14)),
   
  ];

  toggleDetails(index:number){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  addNewGoal(goal: Goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }
  deleteGoal(isComplete: any, index: number ){
    if(isComplete) {
      let toDelete = confirm('Are you sure you want to delete $ {this.goals[index].name}?')
      if (toDelete){
        this.goals.splice(index,1)
      }
      // this.goals.splice(index,1);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
