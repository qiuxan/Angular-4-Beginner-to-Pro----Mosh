import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
interface Post {
  id: number;
  title: string | null;
  body: string | null;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  posts: Post[] = [];
  private url = 'https://jsonplaceholder.typicode.com/posts';
  updatePost(post: Post) {
    this.http
      .patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
      .subscribe((response) => {
        console.log(response);
      });
  }

  deletePost(post: Post) {
    this.http.delete(this.url + '/' + post.id).subscribe((response) => {
      //  this.posts = this.posts.filter((p) => post.id != p.id);
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }
  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';
    this.http
      .post<{ id: number } | null>(this.url, JSON.stringify(post))
      .subscribe((response) => {
        post['id'] = response?.id;
        this.posts.splice(0, 0, post);
      });

    console.log(input.value);
  }

  constructor(private http: HttpClient) {
    this.http.get<Post[]>(this.url).subscribe((response) => {
      this.posts = response;
      // console.log(this.posts);
    });
  }
}
