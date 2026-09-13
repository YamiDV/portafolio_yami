import { Component } from '@angular/core';
import { LinkButton } from '../../shared/components/link-button/link-button';
import { provideIcons } from '@ng-icons/core';
import { bootstrapLinkedin } from '@ng-icons/bootstrap-icons';

import {
  simpleGithub,
  simpleGmail
} from '@ng-icons/simple-icons';


@Component({
  imports: [LinkButton],
  selector: 'app-hero',
  styleUrl: './hero.css',
  templateUrl: './hero.html',
  providers: [
    provideIcons({

      simpleGithub,
      simpleGmail,
      bootstrapLinkedin
    })
  ],
})
export class Hero { }
