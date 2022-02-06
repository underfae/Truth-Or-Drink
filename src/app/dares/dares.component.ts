import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Dare } from '../core/dare.model';

@Component({
  selector: 'app-dares',
  templateUrl: './dares.component.html',
  styleUrls: ['./dares.component.scss']
})
export class DaresComponent implements AfterViewInit {

  exampleData: Dare[] = [
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
  dataSource = new MatTableDataSource<Dare>(this.exampleData);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  numberArray(value: number): number[] {
    return Array(value).fill(4);
  }

  deleteDare(element):void{

  }

  editDare(element):void{

  }

}
