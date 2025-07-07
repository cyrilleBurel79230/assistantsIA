import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,       // pour <router-outlet>
    HttpClientModule    // pour HttpClient dans tes services
  ],
  template: `
    <div class="container">
      <h1>Assistant Cave à Vin</h1>
      <div *ngFor="let vin of cave" class="vin">
        <strong>{{ vin.nom }}</strong> - {{ vin.annee }} ({{ vin.type }}) : {{ vin.quantite }} bouteilles
      </div>
    </div>
  `,
  styles: [`
    .container { font-family: Arial, sans-serif; padding: 1rem; }
    .vin { margin: 0.5rem 0; }
  `]
})
export class AppComponent {
  cave = [
    { nom: 'Château Margaux', annee: 2015, type: 'Rouge', quantite: 6 },
    { nom: 'Pouilly-Fumé', annee: 2020, type: 'Blanc', quantite: 3 }
  ];
}
