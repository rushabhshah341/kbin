import { Component, OnInit } from '@angular/core';
import { CollaboratoryService } from './collaboratory.service';
import { ChallengesCount } from '../models/challenges-count';
import { Challenges } from '../models/challenges';
import * as _ from "lodash";
import { ReversePipe } from '../services/reverse.pipe';

@Component({
  selector: 'app-collaboratory',
  templateUrl: './collaboratory.component.html',
  styleUrls: ['./collaboratory.component.scss']
})
export class CollaboratoryComponent implements OnInit {
  private challengesTotalCount: ChallengesCount;
  private challenges: Challenges;
  // private unsubscribe = new Subject<void>();
  private pager: any = {};
  private query: any = {};
  private allChallenges = [];
  private id: string = "5acd7b9b2808394fbdd33c23";
  constructor(private collaboratoryService: CollaboratoryService) { }

  ngOnInit() {
    this.getChallengesCount();
  }

  private getChallengesCount(): void {
    this.collaboratoryService.getChallengesCount()
      .subscribe(challengesCount => {
        this.challengesTotalCount = challengesCount;
        this.getChallenges();
        console.log(this.challengesTotalCount);
      });
  }

  viewChallenge(id) {
  

  }
  private getChallenges(): void {
    this.pager.query = this.makeQuery();
    this.collaboratoryService.getChallenges(this.pager.query)
      .subscribe(challenges => {
        this.challenges = challenges;
        console.log(this.challenges, typeof(challenges));
      });
  }

  private makeQuery(): void {
    this.query.viewIds = []
    this.query.authors = []
    this.query.communityId = this.id;
    this.query.page = this.pager.page;
    this.query.pagesize = this.pager.pagesize;
    this.query.words = [];
    return this.query;
  }
  
//   this.pager.getStart = function () {
//   return ((this.pager.page - 1)   this.pager.pagesize) + 1;
// };

// this.pager.getEnd = function () {
//   var end = this.pager.getStart() + this.pager.pagesize - 1;
//   if (end > this.challengesTotalCount) {
//     end = this.challengesTotalCount;
//   }
//   return end;
// };
  // this.pager.pagesize = 6;
  // this.pager.page = 1;
}
