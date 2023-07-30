import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive-item',
  templateUrl: './archive-item.component.html',
  styleUrls: ['./archive-item.component.css'],
})
export class ArchiveItemComponent implements OnInit {
  archiveItem: any;
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      // this.archiveItem.year = params.get('year');
      let year = params.get('year');
      let month = params.get('month');
      this.archiveItem = { year, month };
    });
  }
  backHome() {
    this.router.navigate(['/']);
  }
}
