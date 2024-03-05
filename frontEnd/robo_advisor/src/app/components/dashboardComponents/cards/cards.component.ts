import { Component, Input } from '@angular/core';
import { AdviceService } from '../../../services/advice/advice.service';
import { FinancialProduct } from '../../../models/interfaces/ResponseList';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent {
  @Input() item!: FinancialProduct;
  faArrowUp = faArrowUp;

  darkBlue: string = 'darkblue';
  gold: string = 'gold';
  grey: string = 'grey';
  red: string = 'red';
  green: string = 'green';
}