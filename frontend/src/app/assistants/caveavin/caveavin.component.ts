import { Component, OnInit } from '@angular/core';
import { CommonModule }      from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { VinService }        from '../../services/vin.service';
import { APP_CONFIG, AppConfig } from '../../app.config';
import { inject }            from '@angular/core';
import { Vin } from '../../models/vin.model';

@Component({
  selector: 'app-caveavin',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './caveavin.component.html',
  styleUrls: ['./caveavin.component.css']
})
export class CaveavinComponent implements OnInit {
  // injecter la config si besoin
  private config = inject<AppConfig>(APP_CONFIG);
  
  cave: Vin[] = [];
  
  form = this.fb.group({
    nom:      ['', Validators.required],
    annee:    [new Date().getFullYear(), [Validators.required, Validators.min(1900)]],
    type:     ['', Validators.required],
    quantite: [1, [Validators.required, Validators.min(1)]]
  });

  constructor(
    private fb: FormBuilder,
    private vinService: VinService
  ) {}

 
chargerCave(): void {
  this.vinService.getCave().subscribe(data => {
    this.cave = data;
  });
}
  
ngOnInit(): void {
  this.chargerCave();
}
onSubmit(): void {
  if (this.form.valid) {
    const vin = this.form.value as Vin;
    this.vinService.ajouterVin(vin).subscribe(() => {
      this.chargerCave();
      this.form.reset({
        nom: '',
        annee: new Date().getFullYear(),
        type: 'Rouge',
        quantite: 1
      });
    });
  }
}

}