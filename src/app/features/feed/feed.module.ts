import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { PostModule } from '../post/post.module';
import { PostComponent } from '../post/post.component';

@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    CommonModule,
    PostModule
  ]
})
export class FeedModule { }
