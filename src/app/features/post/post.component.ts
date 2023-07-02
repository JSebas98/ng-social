import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-social-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input()
  content: string = '';
  @Input()
  date: Date = new Date();

  constructor() {}
}
