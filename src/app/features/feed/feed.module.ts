import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { PostModule } from '../post/post.module';
import { FeedRoutingModule } from './feed-routing.module';

@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    CommonModule,
    PostModule,
    FeedRoutingModule,
  ]
})
export class FeedModule { }
