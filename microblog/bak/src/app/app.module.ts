import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { AppComponent } from './app.component';
import { BlogPostService } from './blog_post.service';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, MatTabsModule,
  ],
  providers: [BlogPostService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
