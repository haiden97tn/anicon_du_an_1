import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/user/project/get`, { data: {} });
  }
  findById(categoryId): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/user/project/get`, { data: { id: categoryId } });
  }

}
