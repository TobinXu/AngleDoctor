import { Component } from '@angular/core';

import { MessagePage } from '../message/message';
import { HomePage } from '../home/home';
import { PersonalPage } from '../personal/personal';
import { ForumPage } from '../forum/forum';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabHome = HomePage;
  tabMessage = MessagePage;
  tabForum = ForumPage;
  tabPersonal = PersonalPage;

  constructor() {
 
  }
}
