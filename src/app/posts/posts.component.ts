import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
export interface Post {
  id: number;
  title: string | null;
  body: string | null;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  private url = 'https://jsonplaceholder.typicode.com/posts';
  updatePost(post: Post) {
    this.service.uptatePost(post).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        alert('unexpected error occurred');
        console.log(error);
      }
    );
  }

  deletePost(post: Post) {
    this.service.deletePost(post.id).subscribe(
      (response) => {
        //  this.posts = this.posts.filter((p) => post.id != p.id);
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error) => {
        alert('unexpected error occurred');
        console.log(error);
      }
    );
  }
  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';
    this.service.createPost(post).subscribe(
      (response) => {
        post['id'] = response?.id;
        this.posts.splice(0, 0, post);
      },
      (error) => {
        alert('unexpected error occurred');
        console.log(error);
      }
    );

    console.log(input.value);
  }
  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.service.getPosts().subscribe(
      (response) => {
        this.posts = response;
      },
      (error) => {
        alert('unexpected error occurred');
        console.log(error);
      }
    );
  }
}
