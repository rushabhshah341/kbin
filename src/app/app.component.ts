import { Component,OnInit } from '@angular/core';
import { RouterOutlet,Router } from '@angular/router';
import { Location } from '@angular/common';
import { url } from 'inspector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private headerVisible: boolean = true;
  private route: string;

  constructor(private router: Router, private location: Location) {
      
      // this.route = router.url;
      // console.log("hi",this.router);

      router.events.subscribe((val) => {
        if(location.path() != ''){
          this.route = location.path();
        } else {
          this.route = 'Home Page'
        }
        // console.log(this.route)
      });
   }
  ngOnInit(){
        // console.log("hello");
  }
  title = 'KBIN';
  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
