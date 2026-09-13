import { Component } from '@angular/core';
import {
  SkillCard,
  Skill
} from '../../shared/components/skill-card/skill-card';

@Component({
  selector: 'app-skills',
  imports: [SkillCard],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {

  frontend: Skill[] = [
    {
      name: 'HTML',
      icon: 'devicon-html5-plain colored'
    },
    {
      name: 'CSS',
      icon: 'devicon-css3-plain colored'
    },
    {
      name: 'Angular',
      icon: 'devicon-angularjs-plain colored'
    },
    {
      name: 'TypeScript',
      icon: 'devicon-typescript-plain colored'
    }
  ];

  backend: Skill[] = [
    {
      name: 'Java',
      icon: 'devicon-java-plain colored'
    },
    {
      name: 'JavaScript',
      icon: 'devicon-javascript-plain colored'
    },
    {
      name: 'Spring Boot',
      icon: 'devicon-spring-plain colored'
    },
    {
      name: 'PostgreSQL',
      icon: 'devicon-postgresql-plain colored'
    }
  ];

  tools: Skill[] = [
    {
      name: 'Git',
      icon: 'devicon-git-plain colored'
    },
    {
      name: 'GitHub',
      icon: 'devicon-github-original'
    },
    {
      name: 'Docker',
      icon: 'devicon-docker-plain colored'
    },
    {
      name: 'VS Code',
      icon: 'devicon-vscode-plain colored'
    }
  ];

  learning: Skill[] = [
    {
      name: 'AWS',
      icon: 'devicon-amazonwebservices-plain-wordmark colored'
    },
    {
      name: 'Azure',
      icon: 'devicon-azure-plain colored'
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