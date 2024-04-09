import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cotation } from '../model/cotation';
import {
  CollectionReference,
  DocumentData,
  Firestore,
  collection,
  getDocs,
  orderBy,
  query,
  where,collectionData
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})


export class CotationService {
    // users$: Observable<any[]>;
   cotations$: Observable<any[]>;

  constructor(private firestore: Firestore) { 
    

    const cotation = collection(this.firestore, 'user/admin/admin')
    this.firestore.toJSON()
    this.cotations$ = collectionData(cotation);
  }
  
  getCotationPending(){}
  getOneCotation(){}
  getCustomerAffilied(){}
  getImageFromCoation(){}
  updatPriceCotation(){}

    
}