import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Game } from '../core/game.model';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements AfterViewInit{

  exampleData: Game[] = [
    {
      name: "Gra na zjazd szachowy",
      category: "A",
      cardsCount: 32, 
      level: 2,
      questions: [],
      dares: []
    },
    {
      name: "Nowa gra",
      category: "H",
      cardsCount: 32, 
      level: 3,
      questions: [],
      dares: []
    },
    {
      name: "Moja ulubiona",
      category: "F",
      cardsCount: 32, 
      level: 2,
      questions: [],
      dares: []
    },
    {
      name: "Do usunięcia ",
      category: "A",
      cardsCount: 16, 
      level: 1,
      questions: [],
      dares: []
    },
    {
      name: "Gra na zjazd szachowy",
      category: "A",
      cardsCount: 32, 
      level: 2,
      questions: [],
      dares: []
    },{
      name: "Gra na zjazd szachowy",
      category: "A",
      cardsCount: 32, 
      level: 2,
      questions: [],
      dares: []
    },
    {
      name: "Nowa gra",
      category: "H",
      cardsCount: 32, 
      level: 3,
      questions: [],
      dares: []
    },
    {
      name: "Moja ulubiona",
      category: "F",
      cardsCount: 32, 
      level: 2,
      questions: [],
      dares: []
    },
    {
      name: "Do usunięcia ",
      category: "A",
      cardsCount: 16, 
      level: 1,
      questions: [],
      dares: []
    },
    {
      name: "Gra na zjazd szachowy",
      category: "A",
      cardsCount: 32, 
      level: 2,
      questions: [],
      dares: []
    },
    {
      name: "Gra na zjazd szachowy",
      category: "A",
      cardsCount: 32, 
      level: 2,
      questions: [],
      dares: []
    },
    {
      name: "Nowa gra",
      category: "H",
      cardsCount: 32, 
      level: 3,
      questions: [],
      dares: []
    },
    {
      name: "Moja ulubiona",
      category: "F",
      cardsCount: 32, 
      level: 2,
      questions: [],
      dares: []
    },
    {
      name: "Do usunięcia ",
      category: "A",
      cardsCount: 16, 
      level: 1,
      questions: [],
      dares: []
    },
    {
      name: "Gra na zjazd szachowy",
      category: "A",
      cardsCount: 32, 
      level: 2,
      questions: [],
      dares: []
    }
  ]

  displayedColumns: string[] = ['name','category', 'cardsCount', 'level', 'options'];
  dataSource = new MatTableDataSource<Game>(this.exampleData);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource)
  }

  numberArray(value: number): number[] {
    return Array(value).fill(4);
  }

  deleteGame(element):void{

  } 

  editGame(element):void{

  }
}
