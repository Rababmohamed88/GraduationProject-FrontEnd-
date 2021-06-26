import { CarSearchResult } from './../_models/car-search-result';
import { SuggestForm } from './../_models/suggest-form';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SuggestionsService {
  constructor(private http: HttpClient) {}

  sendSuggestionForm(form: SuggestForm) {
    return this.http.post<CarSearchResult[]>(
      'https://localhost:44301/api/Suggestion/Suggest',
      form
    );
  }
}
