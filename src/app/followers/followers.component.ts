import { Component, OnInit } from '@angular/core';
import { GitFollowersService } from '../git-followers.service';
interface Followers {
  login: string;
  avatar_url: string;
  html_url: string;
}
@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css'],
})
export class FollowersComponent {
  constructor(private service: GitFollowersService) {}

  followers: Followers[] = [];
  ngOnInit() {
    this.service.getAll().subscribe((followers) => {
      console.log(followers);

      this.followers = (followers as any[]).map((f) => ({
        login: f.login,
        avatar_url: f.avatar_url,
        html_url: f.html_url,
      }));
    });
  }
}
