import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-git-hub-profile',
  templateUrl: './git-hub-profile.component.html',
  styleUrls: ['./git-hub-profile.component.css'],
})
export class GitHubProfileComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    combineLatest([this.route.queryParamMap, this.route.paramMap]).subscribe(
      (combine) => {
        console.log(combine[0], combine[1]);
      }
    );

    this.route.paramMap.subscribe((params) => {
      let id: string | number | null = params.get('id');
      if (id != null) {
        id = +id;
      }

      console.log({ id });
    });
  }
}
