import { Component } from '@angular/core';
import { LinkButton } from '../../shared/components/link-button/link-button';

@Component({
  imports: [LinkButton],
  selector: 'app-hero',
  styleUrl: './hero.css',
  templateUrl: './hero.html',
})
export class Hero {}
