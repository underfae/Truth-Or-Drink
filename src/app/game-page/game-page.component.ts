import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  constructor(protected router: Router) { }

  ngOnInit(): void {
  }


  menu():void{
    this.router.navigateByUrl("/config")
  }

  shuffle(){

  }

  nextCard(): void{
  
  }

}
