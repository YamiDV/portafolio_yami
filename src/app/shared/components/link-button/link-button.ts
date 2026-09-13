import { Component, input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  imports: [NgIcon],
  selector: 'app-link-button',
  styleUrl: './link-button.css',
  templateUrl: './link-button.html',
})
export class LinkButton {
  text = input.required<string>();
  icon = input.required<string>();
  href = input.required<string>();
}