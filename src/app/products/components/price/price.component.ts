import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges, Input } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'product-price',
  standalone: false,

  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy{

  public interval$?: Subscription;

  @Input()
  public price: number = 0;

  ngOnInit(): void {
    this.interval$ =  interval(1000).subscribe( value => console.log(`Tick: ${ value }`))

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente HIJO: ngOnChanges');
    console.log({ changes });
  }

  ngOnDestroy(): void {
    console.log('Componente HIJO: ngOnDestroy');
    this.interval$?.unsubscribe();
  }


}
