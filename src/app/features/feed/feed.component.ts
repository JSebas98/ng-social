import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/core/models/post.models';

@Component({
  selector: 'ng-social-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {
  posts: Array<Post> = [
    {
      content: 'Example 1',
      date: new Date()
    },
    {
      content: 'Example 2',
      date: new Date()
    }
  ];

  constructor() {}
}
