import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {
  constructor(private _http: HttpClient) { }
  topNews = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=e28f2ac6ce4b4c159dbb18c04edc8857';
  techNews = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=e28f2ac6ce4b4c159dbb18c04edc8857';
  topHeadlines(): Observable<any> {
    return this._http.get(this.topNews);
  }
  techHeadlines(): Observable<any> {
    return this._http.get(this.techNews);
}}
