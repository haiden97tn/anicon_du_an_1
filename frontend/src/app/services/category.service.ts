import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private API_URL = "http://localhost:8000/api/categorys";
  private API_URLI = "http://localhost:8000/api/category";

  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    let requestApi = this.API_URL;
    return this.http.get<any>(requestApi);
  }
  findById(categoryId): Observable<any>{
    let requestApi = `${this.API_URLI}/${categoryId}` ;
    return this.http.get<any>(requestApi);
  }

}
