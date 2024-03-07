import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { UserDetailsService } from '../../../services/user-details/user-details.service';
import { CardsComponent } from '../cards/cards.component';
import { FinancialProduct } from '../../../models/interfaces/ResponseList';
import { AdviceService } from '../../../services/advice/advice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, CardsComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  public chart: any;
  chartInfo!: any[];
  labeldata: FinancialProduct[] = [];
  faUser = faUser;
  username: string | null = null;
  
  constructor(private userDetails: UserDetailsService, private service: AdviceService) {}

  ngOnInit(): void {
    this.username = this.userDetails.getUsername();
    this.service.getChartInfo().subscribe(
      (response) => {
        this.chartInfo = response;
        if (this.chartInfo != null) {
          for (let i = 0; i < this.chartInfo.length; i++) {
            this.labeldata.push(this.chartInfo[i].financial_product);
          }
        }
        
      },
      (error) => {
        console.log('error loading data', error);
      },
    );
  }

}
