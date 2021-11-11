import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-stock',
  templateUrl: './new-stock.component.html',
  styleUrls: ['./new-stock.component.css']
})
export class NewStockComponent {
  isNewStockMode = false;
  
  constructor(
    private router: Router, 
    ) {}

  
  goToCard() {
    this.isNewStockMode = false;
    this.router.navigate(['']);
  }

}
