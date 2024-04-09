import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CotationComponent } from './cotation/cotation.component';
@Component({
  standalone: true,
  imports: [ CommonModule,CotationComponent ],
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  //firestore: Firestore = inject(Firestore)
  users$: Observable<any[]>;
  

  constructor(private firestore: Firestore) {
    const aCollection = collection(this.firestore, 'user/admin/admin')
   this.firestore.toJSON()
    this.users$ = collectionData(aCollection);
    
  }
}