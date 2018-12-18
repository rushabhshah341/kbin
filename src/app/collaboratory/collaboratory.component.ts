import { Component, OnInit } from '@angular/core';
import { CollaboratoryService } from './collaboratory.service';
import { ChallengesCount } from '../models/challenges-count';
import { Challenges } from '../models/challenges';
import { Storage } from '../services/storage.service';
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
  private token: string;
  // private unsubscribe = new Subject<void>();
  private pager: any = {};
  private query: any = {};
  private allChallenges = [];
  private user: boolean = false;
  private id: string = "5acd7b9b2808394fbdd33c23";
  constructor(private collaboratoryService: CollaboratoryService,
              private localStorage: Storage) { }

  ngOnInit() {
    this.getChallengesCount();
    this.localStorage.getItem('token').then(value => {
        this.token = value;
        if(this.token == "undefined" || this.token === null){
          this.user = false;
        } else {
          this.user = true;
        }

    });
  }

  private getChallengesCount(): void {
    this.collaboratoryService.getChallengesCount()
      .subscribe(challengesCount => {
        this.challengesTotalCount = challengesCount;
        this.getChallenges();
        console.log(this.challengesTotalCount);
      });
  }

  // viewChallenge(id) {
  

  // }

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
    this.query.page = 0;
    this.query.pagesize = 0;
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
