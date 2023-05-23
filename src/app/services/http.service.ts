// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenInfo } from '../model/TokenInfo';

@Injectable({
  providedIn: 'root',
})

/**
 * Service to make HTTP calls
 */
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  /**
   * @returns embed configuration
   */
  getTokenForReport(endpoint: string): Observable<TokenInfo> {
    return this.httpClient.get<TokenInfo>(endpoint);
  }
}
