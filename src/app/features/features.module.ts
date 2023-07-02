import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedModule } from './feed/feed.module';
import { PostModule } from './post/post.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    FeedModule,
    PostModule,
  ]
})
export class FeaturesModule { }
