import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { emptyProduct, Product } from '@energy-drink/api-interfaces';
import { ProductFacade } from '@energy-drink/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'energy-drink-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  allProducts$: Observable<Product[]> = this.productFacade.allProducts$;
  selectedProduct$: Observable<Product> = this.productFacade.selectedProduct$;

  form: FormGroup;

  constructor(
    private productFacade: ProductFacade,
    private formBuilder: FormBuilder
  ) {
    this.productFacade.mutations$.subscribe((_) => this.resetProduct());
  }

  ngOnInit() {
    this.initForm();
    this.productFacade.loadProducts();
    this.resetProduct()
  }

  selectProduct(product: Product) {
    this.form.patchValue(product);
    this.productFacade.selectProduct(product.id)
  }

  saveProduct(product: Product) {
    this.productFacade.saveProduct(product);
  }

  deleteProduct(product: Product) {
    this.productFacade.deleteProduct(product);
  }

  resetProduct() {
    this.form.reset();
    this.selectProduct(emptyProduct)
  }

  cancel() {
    this.resetProduct();
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      name: [''],
      caffeineContent: [''],
      description: [''],
    })
  }
}

