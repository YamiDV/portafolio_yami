import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-link-button',
  styleUrl: './link-button.css',
  templateUrl: './link-button.html',
})
export class LinkButton {
  text = input.required<string>();
  icon = input<string>('');
  href = input.required<string>();
}