import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {SERVER_URL} from "../config/api";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}
  get<T>(url: string, headers?: HttpHeaders, isUrlExact: boolean = false): Observable<T> {
    return this.http.get(isUrlExact ? url : `${SERVER_URL}${url}`, {
      headers: headers
    }) as Observable<T>;
  }
  post<T>(url: string, body: any, headers?: HttpHeaders, isUrlExact: boolean = false): Observable<T> {
    return this.http.post(isUrlExact ? url : `${SERVER_URL}${url}`, body, {
      headers: headers
    }) as Observable<T>;
  }
  put<T>(url: string, body: any, headers?: HttpHeaders, isUrlExact: boolean = false): Observable<T> {
    return this.http.put(isUrlExact ? url : `${SERVER_URL}${url}`, body, {
      headers: headers
    }) as Observable<T>;
  }
  delete<T>(url: string, headers?: HttpHeaders, isUrlExact: boolean = false): Observable<T> {
    return this.http.delete(isUrlExact ? url : `${SERVER_URL}${url}`, {
      headers: headers
    }) as Observable<T>;
  }
}
