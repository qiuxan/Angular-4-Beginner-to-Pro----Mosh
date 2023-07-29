import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError as CustomNotFoundError } from '../common/not-found-error';
import { CantProcessError } from '../common/cant-process-error';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(@Inject(String) private url: string, private http: HttpClient) {}
  create(resource: any) {
    return this.http
      .post<{ id: number } | null>(this.url, JSON.stringify(resource))
      .pipe(catchError(this.handleError));
  }
  getAll() {
    return this.http
      .get(this.url)
      .pipe(map((response) => response)) // un necessery in
      .pipe(catchError(this.handleError));
  }
  uptate(resource: any) {
    return this.http
      .patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
      .pipe(catchError(this.handleError));
  }
  delete(postID: number) {
    return this.http
      .delete(this.url + '/' + 345)
      .pipe(catchError(this.handleError));
  }
  private handleError(error: Response) {
    if (error.status === 400) return throwError(new CantProcessError(error));
    if (error.status === 404) return throwError(new CustomNotFoundError(error));
    return throwError(new AppError(error));
  }
}
