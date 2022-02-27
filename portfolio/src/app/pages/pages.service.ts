import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  currentPage = 0
  totalPages = 2
  pages = [1,2,3]

  pageUp: boolean = false;
  pageDown: boolean = false;

  pageController: Subject<any> = new Subject;

  constructor() { }

  getPageDirection(){
    if(this.pageUp){
      return 'up'
    }
    else{
      return 'down'
    }
  }

  goingUp(){
    this.pageUp = true
    this.currentPage = this.currentPage - 1;
    this.currentPage = this.currentPage == -1 ? 2 : this.currentPage;
    this.pageController.next(this.currentPage);
    
  }

  goingDown(){
    this.pageDown = true;
    this.currentPage = (this.currentPage + 1);
    this.currentPage = this.currentPage == 3 ? 0 : this.currentPage;
    this.pageController.next(this.currentPage);
    
  }

  resetTransition(){
    this.pageDown = this.pageUp = false
  }

}
