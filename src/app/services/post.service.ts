import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../posts/posts.component';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError as CustomNotFoundError } from '../common/not-found-error';
import { CantProcessError } from '../common/cant-process-error';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}
  createPost(post: any) {
    return this.http
      .post<{ id: number } | null>(this.url, JSON.stringify(post))
      .pipe(catchError(this.handleError));
  }
  getPosts() {
    return this.http.get<Post[]>(this.url).pipe(catchError(this.handleError));
  }
  uptatePost(post: Post) {
    return this.http
      .patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
      .pipe(catchError(this.handleError));
  }
  deletePost(postID: number) {
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
