import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  product: Product;

  @Output()
  OnSelected: EventEmitter<ProductItemComponent> = new EventEmitter();

  isSelected: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  select() {
    this.OnSelected.emit(this);
  }
}
