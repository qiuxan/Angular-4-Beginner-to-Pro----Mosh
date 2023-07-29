import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { CantProcessError } from '../common/cant-process-error';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any = [];

  updatePost(post: any) {
    this.service.uptate(post).subscribe((response) => {
      console.log(response);
    });
  }

  deletePost(post: any) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id).subscribe(null, (error: AppError) => {
      this.posts.splice(index, 0, post);

      if (error instanceof NotFoundError)
        alert('this post has already been deleted');
      else throw error;
    });
  }
  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';
    this.posts.splice(0, 0, post);
    this.service.create(post).subscribe(
      (response) => {
        post['id'] = response?.id;
      },

      (error: AppError) => {
        this.posts.splice(0, 1);

        if (error instanceof CantProcessError)
          alert('cannot process your request');
        else throw error;
      }
    );

    console.log(input.value);
  }
  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((posts) => (this.posts = posts));
  }
}
