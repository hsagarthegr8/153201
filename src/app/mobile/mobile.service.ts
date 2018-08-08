import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { Mobile } from './mobile.interface'


 @Injectable({
  providedIn: 'root'
})
export class MobileService {
  mobilesUrl = 'assets/mobile.json'

  constructor(private http: HttpClient) { }

  /** This function fetches the mobiles from the mobile json by using HTTP get request. */
  fetchMobiles(): Observable<Mobile[]> {
    return this.http.get<Mobile[]>(this.mobilesUrl)
  }
}
