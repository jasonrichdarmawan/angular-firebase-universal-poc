import { Injectable, inject } from '@angular/core';
import { Firestore, query, collection, where, collectionData } from '@angular/fire/firestore'
import { GetExperienceResponse } from '../models/get-experience-response.model';

@Injectable()
export class GetExperienceBySlugDataSource {
  firestore: Firestore = inject(Firestore);

  constructor() { }

  get(slug: string) {
    const aQuery = query(
      collection(this.firestore, "experiences"),
      where("slug", "==", slug)
    )
    
    return collectionData(aQuery);
  }
}
