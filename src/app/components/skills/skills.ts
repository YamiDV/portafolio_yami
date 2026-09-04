import { Component } from '@angular/core';
import { SkillCard, Skill } from '../../shared/components/skill-card/skill-card';

@Component({
  imports: [SkillCard],
  selector: 'app-skills',
  styleUrl: './skills.css',
  templateUrl: './skills.html',
})
export class Skills {

  frontend: Skill[] = [
    {
      name: 'HTML',
      icon: '/skills/html.svg'
    },
    {
      name: 'CSS',
      icon: '/skills/css.svg'
    },
    {
      name: 'Angular',
      icon: '/skills/angular.svg'
    },
    {
      name: 'TypeScript',
      icon: '/skills/typescript.svg'
    }
  ];

  backend: Skill[] = [
    {
      name: 'Java',
      icon: '/skills/java.svg'
    },
    {
      name: 'Spring Boot',
      icon: '/skills/spring.svg'
    },
    {
      name: 'PostgreSQL',
      icon: '/skills/postgresql.svg'
    }
  ];

  tools: Skill[] = [
    {
      name: 'Git',
      icon: '/skills/git.svg'
    },
    {
      name: 'GitHub',
      icon: '/skills/github.svg'
    },
    {
      name: 'Docker',
      icon: '/skills/docker.svg'
    },
    {
      name: 'VS Code',
      icon: '/skills/vscode.svg'
    }
  ];

  learning: Skill[] = [
    {
      name: 'Git',
      icon: '/skills/git.svg'
    },
    {
      name: 'GitHub',
      icon: '/skills/github.svg'
    },
    {
      name: 'Docker',
      icon: '/skills/docker.svg'
    },
    {
      name: 'VS Code',
      icon: '/skills/vscode.svg'
    }
  ];

  categories = [
  {
    title: 'Frontend',
    skills: this.frontend
  },
  {
    title: 'Backend',
    skills: this.backend
  },
  {
    title: 'Herramientas',
    skills: this.tools
  },
  {
    title: 'Aprendiendo',
    skills: this.learning
  }
];

}
