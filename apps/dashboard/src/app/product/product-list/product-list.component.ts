import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@energy-drink/api-interfaces';

@Component({
  selector: 'energy-drink-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() products: Product[] |  null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
