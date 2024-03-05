import { Component, OnInit } from '@angular/core';
import { ResponseList } from '../../../models/interfaces/ResponseList';
import { AdviceService } from '../../../services/advice/advice.service';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit {
  responseData: any;

  constructor(private advice: AdviceService) {}

  ngOnInit(): void {
    this.advice.getChartInfo().subscribe(
      (response) => {
        this.responseData = response;
        // console.log(this.responseData.fina);
        
      },
      (error) => {
        console.error(error);
      },
    );
  }
}
