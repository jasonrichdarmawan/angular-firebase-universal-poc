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
      .search<GetExperiencesResponse>("", {
        // blocker: if we use SSR, `hitsPerPage: 8`. The TTFB is very slow.
        // solution: SSR 4 items, CSR the rest.
        hitsPerPage: 4
      })

    return promise;
  }
}
