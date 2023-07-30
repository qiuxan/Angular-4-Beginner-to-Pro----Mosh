import { Component, OnInit } from '@angular/core';
import { GitFollowersService } from '../git-followers.service';
import { ActivatedRoute } from '@angular/router';
interface Followers {
  login: string;
  avatar_url: string;
  html_url: string;
  id: number;
}
@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css'],
})
export class FollowersComponent {
  constructor(
    private route: ActivatedRoute,
    private service: GitFollowersService
  ) {}

  followers: Followers[] = [];
  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      console.log({ params });
    });
    this.service.getAll().subscribe((followers) => {
      console.log(followers);

      this.followers = (followers as any[]).map((f) => ({
        login: f.login,
        avatar_url: f.avatar_url,
        html_url: f.html_url,
        id: f.id,
      }));
    });
  }
}
