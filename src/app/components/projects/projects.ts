import { Component } from '@angular/core';

interface Project {
  title: string;
  type: string;
  description: string;
  image: string;
  technologies: string[];
  url: string;
}

@Component({
  imports: [],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects {

  projects: Project[] = [
    /*
    {
      title: 'Moderna',
      type: 'Fullstack',
      description:
        'Dashboard y servicios para gestión de usuarios, afiliados y auditoría.',
      image: '/projects/moderna.png',
      technologies: [
        'Angular',
        'Spring Boot',
        'AWS S3'
      ],
      url: 'https://www.moderna.org.pe/'
    },*/
    {
      title: 'Hotel Ribera del Río',
      type: 'Fullstack',
      description:
        'Plataforma con microservicios para reservas, cuentas y pagos.',
      image: '/ribera.png',
      technologies: [
        'Angular',
        'Java 21',
        'Spring Boot',
        'WebFlux',
        'AWS'
      ],
      url: 'https://cieneguillariberadelrio.com/home'
    },
    {
      title: 'INCLUB',
      type: 'Fullstack',
      description:
        'Migración de plataforma hacia microservicios y Angular, con Kafka, Redis y Spring WebFlux.',
      image: '/inclub.png',
      technologies: [
        'Angular',
        'Spring WebFlux',
        'Kafka',
        'Redis',
        'PostgreSQL'
      ],
      url: 'https://inclub.world/backoffice/home'
    }
  ];
}
