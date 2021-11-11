import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isNewStockMode = false;
  stocks: any;
  
  constructor(
    private router: Router, 
    ) {}


  OnLoop(){
    this.isNewStockMode = true;
  }

  OnAdd(){
    this.isNewStockMode = false;
  }
  goToCard() {
    this.isNewStockMode = false;
    this.router.navigate(['card'], {
      state: this.stocks[0]
    });
  }
  goToNewStock() {
    this.isNewStockMode = true;
    this.router.navigate(['new-stock'], {
      state: this.stocks[0]
    });
  }

}
