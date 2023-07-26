import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
interface Post {
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  posts: Post[] = [];
  constructor(http: HttpClient) {
    http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((response) => {
        this.posts = response;
        console.log(this.posts);
      });
  }
}
