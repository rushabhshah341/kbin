import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Challenges } from '../../models/challenges';
import { createQuery } from '@angular/core/src/view/query';
import { Options } from 'selenium-webdriver/ie';
import { CollaboratoryService } from '../collaboratory.service';

@Component({
  selector: 'app-create-challenge',
  templateUrl: './create-challenge.component.html',
  styleUrls: ['./create-challenge.component.scss']
})
export class CreateChallengeComponent implements OnInit {
  private communityId: any;
  private profileForm: any;
  private challenges = {} as Challenges;
  private challengeQuery: any = {};
  private createMyView: any = {};
  private userName = "test1";
  private firstName = "test";
  private lastName = "test";
  private authorId = "5a8f24012bec142388337892";

  constructor(private router: Router,
              private collaboratoryService: CollaboratoryService) {
  }

  ngOnInit() {
  }

  onSubmit(challengeForm) {
    // TODO: Use EventEmitter with form value
    if (challengeForm.status == "VALID") {
      this.communityId = "5acd7b9b2808394fbdd33c23";
      this.challengeQuery = this.creatChallengeComponent(challengeForm);
      var success = function(c) {
        var communityId = c.communityId;
        delete c.communityId;

        this.createLink = this.collaboratoryService.createLink("5b727bb07eca5140cea7555e", c.viewId, 'contains', {x: 130, y: 130});  
        // $http.post('/api/challenges/' + communityId, {
        //     challenge: c
        // }).success(function(result){
        //     //console.log(result);
        //     this.router.navigate(['/collaboratory']);
        // }).error(function(err){
        //     console.log(err);
        // });
      }
    
      var createView = function(challengeForm, success, noregistration, options)
      // this.createMyView = this.createView(this.challengeQuery.value.title, , false, Options);

    } else{
      window.alert("Make sure all the required fields are filled in");
    }
    challengeForm.reset();
  };

  private createView(challengeForm, success,noregistration,options) {


    var newobj = {
      communityId: this.communityId,
      type: 'View',
      title: challengeForm.value.title,
      authors: [this.authorId],
      status: 'active',
      permission: 'public',
    }
  }

  private creatChallengeComponent(challengeForm) {
    this.challenges.title = challengeForm.value.title;
    this.challenges.description = challengeForm.value.description || "";
    this.challenges.communityId = this.communityId;
    this.challenges.userName = this.userName;
    this.challenges.author = this.firstName + " " + this.lastName;
    this.challenges.keywords = challengeForm.value.keywords;
    this.challenges.abstract = challengeForm.value.abstract;
    this.challenges.users = challengeForm.value.users;
    this.challenges.grade = challengeForm.value.grade;
    this.challenges.students = challengeForm.value.students || "";
    this.challenges.location = challengeForm.value.location;
    this.challenges.country = challengeForm.value.country;
    this.challenges.subject = challengeForm.value.subject;
    this.challenges.duration = challengeForm.value.duration;
    this.challenges.education = challengeForm.value.educator || "";
    this.challenges.references = challengeForm.value.references;
    this.challenges.research = challengeForm.value.research || "";
    this.challenges.quotes = challengeForm.value.quotes;
    this.challenges.link = challengeForm.value.link || "";
    this.challenges.created = this.createDate();
    return this.challenges;
  }

  createDate() {
    var date = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = months[date.getMonth()];
    var day = date.getDate();
    var year = date.getFullYear();

    var hour = date.getHours();
    var ampm = "";
    var mod_hour = hour % 12;

    if (mod_hour === hour) {
      ampm = "AM";
    }
    else {
      ampm = "PM";
    }

    if (mod_hour === 0) {
      mod_hour = 12;
    }

    var minute = date.getMinutes();

    return month + " " + day + " " + year + " " + mod_hour + ":" + minute + ampm;
  };

  private cancel() {
    this.router.navigate(['/collaboratory']);
  };
}
