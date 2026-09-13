import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroBriefcase } from '@ng-icons/heroicons/outline';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

@Component({
  imports: [NgIcon],
  providers: [
    provideIcons({
      heroBriefcase
    })
  ],
  selector: 'app-experience',
  styleUrl: './experience.css',
  templateUrl: './experience.html',
})
export class Experience {

  experiences = [
  {
    role: 'Full Stack Developer',
    company: 'KEOLA NETWORKS S.A.',
    client: 'Hotel Ribera del Río',
    period: 'Julio 2025 - Febrero 2026',
    description: [
      'Desarrollo y puesta en producción de un Service Orchestrator con Java 21 y Spring Boot, basado en patrón Saga para coordinar microservicios de reservas, cuentas y pagos.',
      'Diseño de arquitectura basada en DDD y Spring WebFlux para mejorar modularidad, escalabilidad y mantenibilidad.',
      'Integración con AWS S3 y EC2 para gestión de archivos, imágenes y despliegue.',
      'Implementación de SonarQube para análisis estático, calidad de código y reducción de deuda técnica.',
      'Coordinación de tareas del equipo y comunicación con stakeholders bajo prácticas ágiles.'
    ]
  },
  {
    role: 'Full Stack Developer',
    company: 'KEOLA NETWORKS S.A.',
    client: 'INCLUB / MODERNA',
    period: 'Marzo 2024 - Marzo 2025',
    description: [
      'Migración de aplicaciones monolíticas en .NET hacia microservicios con Spring WebFlux y migración de frontend de React a Angular.',
      'Implementación de comunicación entre servicios con Kafka usando Publisher-Subscriber y Request-Reply.',
      'Desarrollo de autenticación con Spring Security, CQRS, Redis y microservicios orientados a operaciones financieras.',
      'Desarrollo de scripts Python para procesos ETL, migración y validación de datos.',
      'Creación de dashboards en Angular, APIs en Spring Boot y almacenamiento seguro en Amazon S3.'
    ]
  },
  {
    role: 'Full Stack Developer',
    company: 'Freelance',
    client: '',
    period: 'Enero 2023 - Noviembre 2023',
    description: [
      'Refactorización y rediseño de backend con Java 17 y Spring Boot 3 aplicando Clean Architecture y principios SOLID.',
      'Desarrollo de backend desde cero con PostgreSQL, lógica de negocio e integración con servicios externos.',
      'Diseño e implementación de microservicios para mejorar modularidad, escalabilidad y despliegue independiente.'
    ]
  }
];
}
