import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cotation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cotation.component.html',
  styleUrl: './cotation.component.scss'
})
export class CotationComponent {
  firestore: Firestore = inject(Firestore)
  cotations$: Observable<any[]>;

  constructor() {
    const cotation =  collection(this.firestore, 'cotation/cotation/cotation')
  
    this.cotations$ = collectionData(cotation);
  }
}
