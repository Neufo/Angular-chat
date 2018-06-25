import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from '../timeline/chat/chat.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ChatComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class TimelineRoutingModule { }
