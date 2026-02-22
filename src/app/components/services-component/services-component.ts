import { Component } from '@angular/core';
interface Service { icon: string; title: string; description: string; }

@Component({
  selector: 'app-services-component',
  imports: [],
  templateUrl: './services-component.html',
  styleUrl: './services-component.css',
})
export class ServicesComponent {
 services: Service[] = [
    {
      icon: '🎨',
      title: 'Custom Design',
      description: 'Einzigartige, maßgeschneiderte Tattoo-Designs speziell für Sie erstellt – kein Motiv ist zu komplex.'
    },
    {
      icon: '✨',
      title: 'Realistische Tattoos',
      description: 'Hyperrealistische Portraits und detailgetreue Kunstwerke mit beeindruckender Tiefenwirkung.'
    },
    {
      icon: '💖',
      title: 'Blackwork & Geometric',
      description: 'Moderne geometrische Designs und kraftvolle Blackwork-Tattoos mit präzisen Linien.'
    },
    {
      icon: '🌸',
      title: 'Cover-Up',
      description: 'Professionelles Überdecken alter Tattoos – wir machen das Beste aus jedem Untergrund.'
    },
  ];
}
