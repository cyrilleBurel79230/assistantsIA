import { Component, OnInit } from '@angular/core';
import { CommonModule }      from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { VinService }        from '../../services/vin.service';
import { APP_CONFIG, AppConfig } from '../../app.config';
import { inject }            from '@angular/core';

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
  cave: any[] = [];
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

  ngOnInit(): void {
    this.loadCave();
  }

  loadCave() {
    this.vinService.getCave().subscribe(data => this.cave = data);
  }

  onSubmit() {
    if (this.form.invalid) return;
    this.vinService.ajouterVin(this.form.value).subscribe(() => {
      this.form.reset({ annee: new Date().getFullYear(), quantite: 1 });
      this.loadCave();
    });
  }
}