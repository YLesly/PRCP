import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { properties } from 'src/assets/properties/properties';

@Component({
  selector: 'app-ingresar-peso',
  templateUrl: './ingresar-peso.component.html',
  styleUrls: ['./ingresar-peso.component.css']
})
export class IngresarPesoComponent {
  logo = properties.logo;
  formPeso: FormGroup = new FormGroup({});
  logoessalud = properties.logoessalud;
  imgigor = properties.imgigor;
  errorMessage: string = '';
 
  peso: number = 0;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ){}
  ngOnInit(): void{
    this.formPeso = this.fb.group({
      //peso: [0]
      //peso: [0,[Validators.required,Validators.minLength(6)]]
      peso: [null,[Validators.required, Validators.min(1), Validators.max(250)]]
    })

    
  }

  iniciarConsulta() {
    
    if (this.formPeso.valid){
      //console.log(this.formPeso.value);
      // Verificar si el valor de 'peso' es válido y realizar la consulta si es válido
      //if (this.peso >= 1 && this.peso <= 250) {
        //console.log('Realizando consulta con el peso:', this.peso);
        // Agrega aquí la lógica para realizar la consulta con el valor de 'peso'
        // Navegar a la ruta de consultas
      this.router.navigateByUrl(`/operaciones/resultado/${this.formPeso.value.peso}`);
    }
    else{
      this.errorMessage = 'Ingrese un número válido entre 1 y 250';
      
    }
    
    /*
    if (this.formPeso.valid) {
      //const pesoValue = this.formPeso.value.peso;
      if (this.formPeso.value.peso >= 1 && this.formPeso.value.peso <= 250) {
        // Realiza la consulta si el valor de peso es válido
        this.router.navigateByUrl(`/operaciones/resultado/${this.formPeso.value.peso}`);
      } else {
        // Muestra un mensaje de error si el valor de peso está fuera del rango
        this.formPeso.get('peso')?.setErrors({ 'incorrect': true });
        console.log('El peso debe estar entre 1 y 250.');
      }
    } else {
      console.log('Ingrese nuevamente el peso');
    } */

  }

  handleKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.iniciarConsulta();
    }
  }

  
}
