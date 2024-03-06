import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FinancialProduct } from '../../../models/interfaces/ResponseList';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Input() item!: FinancialProduct;
  @Output() closeModal = new EventEmitter<void>();

  onCloseModal(): void {
    this.closeModal.emit();
  }

  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }
}
