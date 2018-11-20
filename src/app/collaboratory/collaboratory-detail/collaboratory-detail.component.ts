import { Component, OnInit } from '@angular/core';
import { CollaboratoryService } from '../collaboratory.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Challenges } from '../../models/challenges';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-collaboratory-detail',
  templateUrl: './collaboratory-detail.component.html',
  styleUrls: ['./collaboratory-detail.component.scss']
})
export class CollaboratoryDetailComponent implements OnInit {
  Challenges: Observable<Challenges>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CollaboratoryService
  ) { }

  ngOnInit() {
    this.Challenges = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getChallenge(params.get('id')))
    );
  }

}
