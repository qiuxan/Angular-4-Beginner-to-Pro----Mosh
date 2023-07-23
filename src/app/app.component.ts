import { Component } from '@angular/core';
import { FaveriteEventData } from './star/star.component';
import { LikeOutputData } from './like/like.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-app';
  post = {
    isFavorite: true,
  };
  onFavoriteChanged(isFaverite: FaveriteEventData) {
    console.log(
      'onFavoriteChanged function called',
      isFaverite,
      isFaverite.selected
    );
  }

  onLikedChanged(isLiked: LikeOutputData) {
    console.log(
      'likedChanged function called',
      { isLiked },
      isLiked.likedChangeTo
    );
    if (isLiked.likedChangeTo) this.tweetLike.likeCount++;
    // in real word application data should be pushed to the backend here
    else this.tweetLike.likeCount--;
  }
  tweetLike = {
    // real world application data received from the api backend
    isLike: false,
    likeCount: 0,
  };
  courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
  ];
  viewMode = 'list';

  onAdd() {
    this.courses.push({ id: 4, name: 'course4' });
  }
  onRemove(course: any) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
  onUpdate(course: any) {
    let index = this.courses.indexOf(course);
    this.courses[index].name = 'updated';
  }
}
