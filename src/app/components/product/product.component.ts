import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {ConfirmationService} from "primeng/api";
import {Product} from "../../../types";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RatingModule} from "primeng/rating";
import {ConfirmPopupModule} from "primeng/confirmpopup";
import {TruncateNamePipe} from "../../pipes/truncate-name.pipe";
import {PricePipe} from "../../pipes/price.pipe";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RatingModule, ConfirmPopupModule, TruncateNamePipe, PricePipe, ButtonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  providers: [ConfirmationService],
})
export class ProductComponent {
  constructor(private confirmationService: ConfirmationService) {
  }

  @ViewChild('deleteButton') deleteButton: any;

  @Input() product!: Product;
  @Output() edit: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() delete: EventEmitter<Product> = new EventEmitter<Product>();

  editProduct() {
    this.edit.emit(this.product);
  }

  confirmDelete() {
    this.confirmationService.confirm({
      target: this.deleteButton.nativeElement,
      message: 'Are you sure that you want to delete this product?',
      accept: () => {
        this.deleteProduct();
      },
    });
  }

  deleteProduct() {
    this.delete.emit(this.product);
  }

}
