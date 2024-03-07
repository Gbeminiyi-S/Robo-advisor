import { Component, Input } from '@angular/core';
import { AdviceService } from '../../../services/advice/advice.service';
import { FinancialProduct } from '../../../models/interfaces/ResponseList';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [FontAwesomeModule, ModalComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent {
  @Input() item!: FinancialProduct;
  chartInfo!: any[];
  faArrowUp = faArrowUp;
  isModalOpen: boolean = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
