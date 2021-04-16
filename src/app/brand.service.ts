import { Observable,of,from } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Brand } from './models/brand';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private brandURL="http://localhost:3000/brand";

  getBrand(): Observable<Brand[]>{
    //return of(fakeData);
    return this.http.get<Brand[]>(this.brandURL);
  }
  constructor(private http: HttpClient) { }
}
