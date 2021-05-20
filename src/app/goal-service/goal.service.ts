import { Injectable } from '@angular/core';
import { Goals } from '../goalList';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  getgoals(): import("../goal").Goal[] {
    throw new Error('Method not implemented.');
  }
  getGoals(){
    return Goals
  };

  constructor() { }
};
