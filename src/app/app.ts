import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './product/product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Product],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  products = [
  {name: 'pepsi bottle', price: 1.99, url: 'https://placehold.co/300x200' },
  {name: 'cola bottle', price: 2.99, url: 'https://placehold.co/300x200' },
  {name: 'fanta bottle', price: 0.99, url: 'https://placehold.co/300x200' },
  {name: 'sprite bottle', price: 1.49, url: 'https://placehold.co/300x200' },
  {name: 'mountain bottle', price: 1.99, url: 'https://placehold.co/300x200' }
  ];
}
