import { Injectable } from '@angular/core';
import algoliasearch from 'algoliasearch';
import { environment } from 'src/environments/environment';
import { GetExperiencesResponse } from '../models/get-experiences-response.model';

@Injectable()
export class GetExperiencesDataSource {

  constructor() { }

  get() {
    const apiId = environment.algoliasearch.appId;
    const apiKey = environment.algoliasearch.apiKey;

    const client = algoliasearch(apiId, apiKey);
    const index = client.initIndex("experiences")

    const promise = index
      .search<GetExperiencesResponse>("")

    return promise;
  }
}
