import { Component, input } from '@angular/core';

export interface Skill {
  name: string;
  icon: string;
}

@Component({
  imports: [],
  selector: 'app-skill-card',
  styleUrl: './skill-card.css',
  templateUrl: './skill-card.html',
})
export class SkillCard {
  title = input.required<string>();
  skills = input.required<Skill[]>();
}
