import { Component, OnInit } from '@angular/core';
import { GitFollowersService } from '../git-followers.service';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map, switchMap } from 'rxjs';
interface Follower {
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

  followers: Follower[] = [];
  ngOnInit() {
    combineLatest([this.route.queryParamMap, this.route.paramMap])
      .pipe(
        switchMap((combine) => {
          let id = combine[0].get('id');
          let page = combine[1].get('page');
          // this.service.getAll({id, page})// in real world application
          return this.service.getAll();
        })
      )
      .subscribe((followers) => {
        this.followers = (followers as Follower[]).map((f) => ({
          login: f.login,
          avatar_url: f.avatar_url,
          html_url: f.html_url,
          id: f.id,
        }));
      });
  }
}
