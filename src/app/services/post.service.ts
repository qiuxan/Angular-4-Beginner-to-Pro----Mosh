import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../posts/posts.component';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posdts';

  constructor(private http: HttpClient) {}
  createPost(post: any) {
    return this.http.post<{ id: number } | null>(
      this.url,
      JSON.stringify(post)
    );
  }
  getPosts() {
    return this.http.get<Post[]>(this.url);
  }
  uptatePost(post: Post) {
    return this.http.patch(
      this.url + '/' + post.id,
      JSON.stringify({ isRead: true })
    );
  }
  deletePost(postID: number) {
    return this.http.delete(this.url + '/' + postID);
  }
}
