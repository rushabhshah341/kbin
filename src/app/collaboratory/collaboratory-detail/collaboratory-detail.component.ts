import { Component, OnInit } from '@angular/core';
import { CollaboratoryService } from '../collaboratory.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Challenges } from '../../models/challenges';
import { switchMap } from 'rxjs/operators';
import { NotesCount } from '../../models/notes-count';

@Component({
  selector: 'app-collaboratory-detail',
  templateUrl: './collaboratory-detail.component.html',
  styleUrls: ['./collaboratory-detail.component.scss']
})
export class CollaboratoryDetailComponent implements OnInit {
  Challenges: Observable<Challenges>;
  private viewId: string;
  private notesCount: string;
  private riseAboveCount: string;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private collaboratoryService: CollaboratoryService
  ) { }

  ngOnInit() {
    this.Challenges = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.collaboratoryService.getChallenge(params.get('id'))
        )
    );
    this.Challenges.subscribe(Challenge => {
      this.viewId = Challenge.viewId;
      console.log(Challenge.viewId,this.viewId);
      this.collaboratoryService.getInitialNoteCount(this.viewId)
      .subscribe(
        (data: Challenges) => {
        this.notesCount = data.notesCount;
        this.riseAboveCount = data.riseaboveCount;    
      },
      err => console.error(err),
      () => {
        console.log(this.notesCount, this.riseAboveCount, "done loading counts!")
      });
     
    });
  }

  gotoCollaboratory(challenges: Challenges) {
    this.router.navigate(['/collaboratory']);
  }
}
