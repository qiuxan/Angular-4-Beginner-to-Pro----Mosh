import { Component, EventEmitter, Input, Output } from '@angular/core';
export interface LikeOutputData {
  likedChangeTo: boolean;
}
@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent {
  @Input() isLiked: boolean = true;
  @Output('change') click = new EventEmitter();

  onClick() {
    this.isLiked = !this.isLiked;
    this.click.emit({ likedChangeTo: this.isLiked });
  }
}
