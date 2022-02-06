import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Question } from '../core/question.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements AfterViewInit{

  exampleData: Question[] = [
    {
      name: "Komu w tym pokoju najbardziej ufasz?",
      value: 2,
    },
    {
      name: "Komu w tym pokoju najbardziej ufasz?",
      value: 2,
    },
    {
      name: "Komu w tym pokoju najbardziej ufasz?",
      value: 2,
    },
    {
      name: "Komu w tym pokoju najbardziej ufasz?",
      value: 2,
    },
    {
      name: "Komu w tym pokoju najbardziej ufasz?",
      value: 2,
    },
    {
      name: "Komu w tym pokoju najbardziej ufasz?",
      value: 2,
    },
    {
      name: "Komu w tym pokoju najbardziej ufasz?",
      value: 2,
    },
    {
      name: "Komu w tym pokoju najbardziej ufasz?",
      value: 2,
    },
    {
      name: "Komu w tym pokoju najbardziej ufasz?",
      value: 2,
    },
    {
      name: "Komu w tym pokoju najbardziej ufasz?",
      value: 2,
    },
    {
      name: "Komu w tym pokoju najbardziej ufasz?",
      value: 2,
    },
    {
      name: "Komu w tym pokoju najbardziej ufasz?",
      value: 2,
    },
    {
      name: "Komu w tym pokoju najbardziej ufasz?",
      value: 2,
    },
  ]

  displayedColumns: string[] = ['name','level','options'];
  dataSource = new MatTableDataSource<Question>(this.exampleData);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  numberArray(value: number): number[] {
    return Array(value).fill(4);
  }

  deleteQuestion(element):void{

  }

  editQuestion(element):void{

  }

}
