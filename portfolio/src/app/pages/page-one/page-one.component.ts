import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [
      state('in', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0}),
        animate(600 )
      ]),
      transition(':leave',
        animate(600, style({opacity: 0})))
    ]),
    trigger('flyInOut', [
      state('upRest', 
        style({ transform: 'translateY(0)' })
      ),
      state('downRest', 
        style({ transform: 'translateY(0)'},)
      ),
      state('up', 
        style({ transform: 'translateY(100%)' })
      ),
      state('down', 
        style({ transform: 'translateY(-100%)' })
      ),
      transition('* => upRest', [
        style({ transform: 'translateY(-100%)' }),
        animate('600ms 0.5ms ease-in-out')
      ]),
      transition('* => downRest', [
        style({ transform: 'translateY(100%)' }),
        animate('600ms 0.2ms ease-in-out')
      ]),
      transition('* => up', [
        animate('600ms 0.2ms ease-in-out')
      ]),
      transition('* => down', [
        animate('600ms 0.2ms ease-in-out')
      ]),
    ])
  ]
})
export class PageOneComponent implements OnInit {
  @Input() 
  pageNumber;

  scrolledDown = false
  scrolledUp = false
  lastKnownScrollPosition: number;
  ticking: boolean = true;
  currentState: string;
  currentState1: string;
  currentState2: string;
  currentState3: string;
  sub: Subscription;
  @HostListener("window:wheel", ['$event']) onWindowScroll($event) {

    this.lastKnownScrollPosition = window.scrollY;
  
    if (!this.ticking) {
      console.log("test")
      this.ticking = true;
      this.scrolledDown = false
      if($event.deltaY > 0){
        this.tracerChange('down');
        //this.currentState = 'down'
        // setTimeout(()=>{
          this.pageService.goingDown();
          //this.router.navigate(['/p2']);
        // },400)
      }
      else{
        this.tracerChange('up');
        // this.currentState = 'up'
        // setTimeout(()=>{
          this.pageService.goingUp();
          //this.router.navigate(['/p3']);
        // },400)
      }
    }
  }
    
    constructor(private router: Router, public pageService: PagesService) { }

    ngOnInit() {
      this.tracerChange('up');
      //this.currentState = 'down';
      this.sub = this.pageService.pageController.subscribe((currentPageNumber) => {
        console.log(currentPageNumber+1, this.pageNumber);

        if(currentPageNumber+1 == this.pageNumber){
         this.pageAction();
        }
      });
      console.log(this.pageService.currentPage+1, this.pageNumber);
      if(this.pageService.currentPage+1 == this.pageNumber){
        this.pageAction();
      }
    }

    pageAction(){
      console.log("starting",this.currentState)
      if(this.pageService.getPageDirection() == 'up'){
        this.tracerChange('upRest');
        //this.currentState = 'upRest'
      }else{
        this.tracerChange('downRest');
        //this.currentState = 'downRest'
      }
      console.log("Ending",this.currentState,this.currentState1, this.currentState2, this.currentState3);
      this.pageService.resetTransition();
      setTimeout(()=>{
        this.ticking = false
      },1000)
    }

    tracerChange(state: string){
      this.currentState = state;
      setTimeout(() => {
        this.currentState1 = state;
      }, 15);
      setTimeout(() => {
        this.currentState2 = state;
      }, 30);
      setTimeout(() => {
        this.currentState3 = state;
      }, 45);
    }
}
