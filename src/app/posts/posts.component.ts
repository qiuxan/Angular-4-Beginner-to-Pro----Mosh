import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { CantProcessError } from '../common/cant-process-error';
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

  updatePost(post: Post) {
    this.service.uptate(post).subscribe((response) => {
      console.log(response);
    });
  }

  deletePost(post: Post) {
    this.service.delete(post.id).subscribe(
      (response) => {
        //  this.posts = this.posts.filter((p) => post.id != p.id);
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError)
          alert('this post has already been deleted');
        else throw error;
      }
    );
  }
  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';
    this.service.create(post).subscribe(
      (response) => {
        post['id'] = response?.id;
        this.posts.splice(0, 0, post);
      },

      (error: AppError) => {
        if (error instanceof CantProcessError)
          alert('cannot process your request');
        else throw error;
        // if (error.status === 400) {
        //   // this.form.setErrors(error.json()) // if it is a form
        // } else {
        //   alert('unexpected error occurred');
        //   console.log(error);
        // }
      }
    );

    console.log(input.value);
  }
  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((response) => {
      this.posts = response;
    });
  }
}
