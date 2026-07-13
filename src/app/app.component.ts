import { Component } from '@angular/core';

type NavItem = {
  label: string;
  href: string;
};

type SocialLink = {
  label: string;
  href: string;
};

type Metric = {
  value: string;
  label: string;
};

type TechItem = {
  name: string;
  icon?: string;
  iconAlt?: string;
  badge?: string;
  tone: string;
  wide?: boolean;
  lightSurface?: boolean;
  wordmark?: boolean;
};

type TechGroup = {
  title: string;
  items: TechItem[];
};

type Project = {
  title: string;
  role: string;
  summary: string;
  impact: string;
  stack: string[];
  category: string;
  accent: string;
};

type CareerItem = {
  period: string;
  title: string;
  company: string;
  description: string;
  points: string[];
};

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Luis Sauceda';
  isMobileMenuOpen = false;

  readonly navItems: NavItem[] = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Contacto', href: '#contacto' }
  ];

  readonly socialLinks: SocialLink[] = [
    { label: 'GitHub', href: 'https://github.com/tu-usuario' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tu-perfil' },
    { label: 'Correo', href: 'mailto:tu-correo@dominio.com' }
  ];

  readonly metrics: Metric[] = [
    { value: '8+', label: 'años de experiencia' },
    { value: '20+', label: 'proyectos entregados' },
    { value: 'Full-stack', label: 'web, mobile y backend' },
    { value: 'ERP + APIs', label: 'integraciones y automatización' }
  ];

  readonly techGroups: TechGroup[] = [
    {
      title: 'Frontend',
      items: [
        { name: 'Angular', icon: 'images/stack-icons/angular.svg', iconAlt: 'Angular', tone: '#dd0031' },
        { name: 'Ionic', icon: 'images/stack-icons/ionic.svg', iconAlt: 'Ionic', tone: '#4f8cff' },
        { name: 'TypeScript', icon: 'images/stack-icons/typescript.svg', iconAlt: 'TypeScript', tone: '#3178c6' },
        { name: 'JavaScript', icon: 'images/stack-icons/javascript.svg', iconAlt: 'JavaScript', tone: '#f7df1e' }
      ]
    },
    {
      title: 'Backend',
      items: [
        { name: 'Laravel', icon: 'images/stack-icons/laravel.svg', iconAlt: 'Laravel', tone: '#ff2d20' },
        { name: 'PHP', icon: 'images/stack-icons/php.svg', iconAlt: 'PHP', tone: '#787cb5' },
        { name: 'Spring Boot', icon: 'images/stack-icons/spring.svg', iconAlt: 'Spring Boot', tone: '#6db33f' },
        { name: 'Node.js', icon: 'images/stack-icons/nodejs.svg', iconAlt: 'Node.js', tone: '#68a063' }
      ]
    },
    {
      title: 'Datos',
      items: [
        { name: 'PostgreSQL', icon: 'images/stack-icons/postgresql.svg', iconAlt: 'PostgreSQL', tone: '#336791' },
        { name: 'MySQL', icon: 'images/stack-icons/mysql.svg', iconAlt: 'MySQL', tone: '#4479a1' },
        {
          name: 'SQL Server',
          icon: 'images/stack-icons/microsoftsqlserver.svg',
          iconAlt: 'Microsoft SQL Server',
          tone: '#cc2927'
        },
        { name: 'Power BI', icon: 'images/stack-icons/powerbi.svg', iconAlt: 'Power BI', tone: '#f2c811' }
      ]
    },
    {
      title: 'Infraestructura',
      items: [
        { name: 'Docker', icon: 'images/stack-icons/docker.svg', iconAlt: 'Docker', tone: '#2496ed' },
        {
          name: 'AWS',
          icon: 'images/stack-icons/amazonwebservices.svg',
          iconAlt: 'Amazon Web Services',
          tone: '#ff9900',
          wordmark: true
        },
        {
          name: 'GitHub Actions',
          icon: 'images/stack-icons/githubactions.svg',
          iconAlt: 'GitHub Actions',
          tone: '#2088ff'
        },
        { name: 'Linux', icon: 'images/stack-icons/linux.svg', iconAlt: 'Linux', tone: '#f7b500' }
      ]
    }
  ];

  readonly projects: Project[] = [
    {
      title: 'GastoTrack',
      role: 'Full-Stack',
      summary:
        'Sistema web para control de gastos, aprobaciones y reportes operativos.',
      impact:
        'Centraliza el seguimiento financiero y reduce trabajo manual en procesos internos.',
      stack: ['Angular', 'Laravel', 'PostgreSQL', 'Docker'],
      category: 'Operación',
      accent: '#4f8cff'
    },
    {
      title: 'Enlace PWA',
      role: 'Mobile',
      summary:
        'Aplicación PWA para gestión de documentos, encuestas y notificaciones internas.',
      impact:
        'Mejora el acceso desde cualquier dispositivo y simplifica flujos para equipos en campo.',
      stack: ['Ionic', 'Angular', 'TypeScript', 'Capacitor'],
      category: 'Movilidad',
      accent: '#8b5cf6'
    },
    {
      title: 'Dashboard Analítico',
      role: 'Data',
      summary:
        'Panel de análisis con indicadores de ventas, inventarios y nómina.',
      impact:
        'Acelera la toma de decisiones con visualizaciones y métricas accionables.',
      stack: ['Python', 'Pandas', 'Power BI', 'SQL'],
      category: 'Datos',
      accent: '#10b981'
    }
  ];

  readonly career: CareerItem[] = [
    {
      period: '2022 - Presente',
      title: 'Full-Stack Developer',
      company: 'Productos y sistemas empresariales',
      description:
        'Diseño e implementación de soluciones web, móviles e integraciones con ERPs.',
      points: ['APIs REST', 'Automatización de procesos', 'Soporte a equipos internos']
    },
    {
      period: '2019 - 2022',
      title: 'Desarrollador Web',
      company: 'Plataformas de operación',
      description:
        'Construcción de módulos administrativos, dashboards y sistemas de control.',
      points: ['Angular + Laravel', 'Modelado de datos', 'Optimización de flujos']
    },
    {
      period: '2017 - 2019',
      title: 'Analista / Desarrollador',
      company: 'Sistemas a medida',
      description:
        'Participación en levantamiento de requerimientos, desarrollo y mantenimiento.',
      points: ['Entrega iterativa', 'Documentación técnica', 'Acompañamiento a usuarios']
    }
  ];

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
