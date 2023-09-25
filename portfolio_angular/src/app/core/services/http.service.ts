/* eslint-disable @typescript-eslint/no-explicit-any */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../enviroments/enviroment';

// Errore in questo import
// import {JobPost} from "../../models/domain/jobpost.models";

/*
 * @description Servizio che si occupa di gestire le chiamate
 * http utilizzate dall'applicazione
 */
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  /**
   * @description Gestione chiamate GET
   *
   * @param url
   */
  public get(url: string, queryParams?: any): Observable<any> {
    const queryString = queryParams !== undefined && queryParams !== null
      ? Object.keys(queryParams).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(queryParams[k])}`).join('&')
      : null;

    const fullRelativePath = queryString !== null ? `${url}?${queryString}` : url;
    return this.http.get<any>(`${environment.apiUrl}${fullRelativePath}`, { headers: { 'Content-Type': 'application/json' }});
  }


  /**
   * @description Gestione chiamate POST
   *
   * @param url
   * @param model
   */
  public post(url: string, model: any = null): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}${url}`, model, { headers: { 'Content-Type': 'application/json',"Client-Id" : 'gru-2' }});
  }


  /**
   * @description Gestione chiamate PUT
   *
   * @param url
   * @param model
   */
  public put(url: string, model: any = null): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}${url}`, model, { headers: { 'Content-Type': 'application/json' }});
  }

  /**
   * @description Gestione chiamate DELETE
   *
   * @param url
   */
  public delete(url: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}${url}`, { headers: { 'Content-Type': 'application/json' }});
  }



  /**
   * @description Gestione delle chiamate che gestiscono i file
   *
   * @param url
   */
  public getFile(url: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}${url}`, { headers: { 'Content-Type': 'application/json' }, responseType: 'blob'});
  }

  public createAndGetFile(url: string, model: any = null): Observable<any> {
    return this.http.post(`${environment.apiUrl}${url}`,model, { headers: { 'Content-Type': 'application/json' }, responseType: 'blob'});
  }
  public postFile(url: string, model: any = null): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}${url}`, model);
  }
}
