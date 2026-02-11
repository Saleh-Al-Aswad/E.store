import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts() {
    return [
      {name: 'pepsi bottle', price: 1.99, url: 'https://placehold.co/300x200' },
      {name: 'cola bottle', price: 2.99, url: 'https://placehold.co/300x200' },
      {name: 'fanta bottle', price: 0.99, url: 'https://placehold.co/300x200' },
      {name: 'sprite bottle', price: 1.49, url: 'https://placehold.co/300x200' },
      {name: 'mountain bottle', price: 1.99, url: 'https://placehold.co/300x200' }
    ];
  }
}
