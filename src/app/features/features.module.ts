import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedModule } from './feed/feed.module';
import { PostModule } from './post/post.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    FeedModule,
    PostModule,
    LoginModule,
  ]
})
export class FeaturesModule { }
