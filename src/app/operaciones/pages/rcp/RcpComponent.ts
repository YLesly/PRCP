import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { properties } from 'src/assets/properties/properties';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rcp',
  templateUrl: './rcp.component.html',
  styleUrls: ['./rcp.component.css']
})

export class RcpComponent {
  // Datos para los textos
  texto1: string = "Texto 1";
  texto2: string = "Texto 2";
  texto3: string = "Texto 3";
  parametros = properties.parametros;
  imgigor2 = properties.imgigor2;
  peso: number = 0.0;

  suma: number = 0;

  adrenalina: number = 0;
  shock3: number = 0.0;
  shock5: number = 0.0;
  shock71: number = 0.0;
  shock72: number = 0.0;
  Hipovolemia: number = 0.0;
  Hipovolemia2: number = 0.0;
  pH: number = 0.0;
  Hipoglicemia: number = 0.0;
  Hipoglicemia1: number = 0.0;
  Hipokalemia: number = 0.0;
  Hipokalemia2: number = 0.0;
  Hiperkalemia : String = "";
  Hiperkalemia1 : number = 0.00;
  Hiperkalemia2 : number = 0.0;
  //Amiodarona: number = 0.0;
  Amiodarona: string = "";

  //mensajes de intubacion
  intubacion: string = "";
  profund : string = "";
  neumotorax : string = "";
  lido: number = 0.0;
  Lidocaina: string = "";
  mensaje6: string = "";

  currentTime: number = 0;
  timer: any;

  //data: any[] = [];

  constructor(
    //recuperar valor desde la URL
    private activatedRoute: ActivatedRoute,
    //private messageService: MessageService
    private router: Router,
    //private authService: AuthService,
  ) { }

  ngOnInit(): void {
    //recupera el parametro "peso"
    this.activatedRoute.params
      .pipe(switchMap(({ peso }) => this.peso = peso))
      //.subscribe(() => { console.log(this.peso); })
      .subscribe(() => { 
        console.log(this.peso);

        this.suma = this.peso * 10;
        console.log(this.suma);

        // calcular Shock paso 3
        this.shock3 = this.peso * 2;
        console.log(this.shock3);

        // calcular Shock paso 5
        this.shock5 = this.peso * 4;
        console.log(this.shock5);

        // calcular Shock paso 7
        this.shock71 = this.peso * 4;
        this.shock72 = this.peso * 10;
        console.log(this.shock71);
        console.log(this.shock72);

        // calcular la adrenalina 
        this.adrenalina = parseFloat((this.peso * 0.1).toFixed(1));
        console.log(this.adrenalina);
        
        // calcular la Hipovolemia
        this.Hipovolemia = this.peso *10;
        console.log(this.Hipovolemia);
        
        this.Hipovolemia2 = this.peso *20;
        console.log(this.Hipovolemia);

        // calcular ph
        this.pH = this.peso;
        console.log(this.pH);

        // calcular Hipoglicemia 
        this.Hipoglicemia = this.peso * 2.5;
        this.Hipoglicemia1 = this.peso * 5;

        // calcular Hipokalemia
        let resultadoh = this.peso * 0.5;
        this.Hipokalemia = parseFloat(resultadoh.toFixed(1));
        console.log(this.Hipokalemia);

        let resultadohh = this.peso * 0.5 * 1000 / 80;
        this.Hipokalemia2 = parseFloat(resultadohh.toFixed(1));
        console.log(this.Hipokalemia2);
        

        // calcular Hiperkalemia 
        if (this.peso <= 10){
          this.Hiperkalemia1 = this.peso;
          this.Hiperkalemia2 = this.peso * 2;
          this.Hiperkalemia = "Gluconato Ca 10%: " + this.Hiperkalemia1 + " ml + " + this.Hiperkalemia2 + "ml de SF en 2 min";
          console.log(this.Hiperkalemia);
          
        } else{
          this.Hiperkalemia = "Gluconato Ca 10%: 10 ml + 20 ml de SF en 2 min";
          console.log(this.Hiperkalemia);
          
        }

        // calcular Amiodarona
        if (this.peso <= 60){
          let resultado = this.peso * 5 / 50;
          let Amio = parseFloat(resultado.toFixed(1));
          console.log(Amio);

          let resultado1 = this.peso * 5 / 6;
          let Amio1 = parseFloat(resultado1.toFixed(1));
          console.log(Amio1);

          this.Amiodarona = "A: " + Amio + " ml + " + Amio1 + " ml de Dx5% (bolo)";
          console.log(this.Amiodarona);
          
        }
        else {
          this.Amiodarona = "A: 6 ml + 20 ml de Dx5% (bolo)";
          console.log(this.Amiodarona);
          
        }

         //calcular Lidocaina
        //this.lido = Number((this.peso / 20).toFixed(2));
        //console.log(this.lido);

        function redondearConAjuste(num: number, decimales: number) {
          const factor = Math.pow(10, decimales);
          const tempNumber = num * factor;
          const roundedTempNumber = Math.round(tempNumber);
          return roundedTempNumber / factor;
        }
        
        this.lido = redondearConAjuste(this.peso / 20, 1);
        console.log(this.lido);

        this.Lidocaina = "L: " + this.lido + " ml + " + this.lido + " ml de SF (bolo)"
          console.log(this.Lidocaina);
        

        //calcular intubacion
        if (this.peso < 6){
          this.intubacion = "3.0 sin cuff",
          console.log(this.intubacion);
        } else if (this.peso >= 6 && this.peso < 10){
          this.intubacion = "3.0 con cuff o 3.5 sin cuff",
          console.log(this.intubacion);
        } else if (this.peso >= 10 && this.peso < 12){
          this.intubacion = "3.5 con cuff o 4.0 sin cuff",
          console.log(this.intubacion);
        } else if (this.peso >= 12 && this.peso < 15){
          this.intubacion = "4.0 con cuff o 4.5 sin cuff",
          console.log(this.intubacion);
        } else if (this.peso >= 15 && this.peso < 19){
          this.intubacion = "4.5 con cuff o 5.0 sin cuff",
          console.log(this.intubacion);
        } else if (this.peso >= 19 && this.peso < 24){
          this.intubacion = "5.0 con cuff o 5.5 sin cuff",
          console.log(this.intubacion);
        } else if (this.peso >= 24 && this.peso < 30){
          this.intubacion = "6.0 con cuff",
          console.log(this.intubacion);
        } else if (this.peso >= 30 && this.peso < 36){
          this.intubacion = "6.5 con cuff",
          console.log(this.intubacion);
        } else if (this.peso >= 36){
          this.intubacion = ">= 7.0 con cuff",
          console.log(this.intubacion);
        }

        // Calcular profundidad
        if (this.peso < 6){
          this.profund  = "9 - 9.5 cm de comisura",
          console.log(this.profund);
        } else if (this.peso >= 6 && this.peso < 10){
          this.profund = "10.5 - 11 cm de comisura",
          console.log(this.profund);
        } else if (this.peso >= 10 && this.peso < 12){
          this.profund = "11 - 12 cm de comisura",
          console.log(this.profund);
        } else if (this.peso >= 12 && this.peso < 15){
          this.profund = "13.5 cm de comisura",
          console.log(this.profund);
        } else if (this.peso >= 15 && this.peso < 19){
          this.profund = "14 - 15 cm de comisura",
          console.log(this.profund);
        } else if (this.peso >= 19 && this.peso < 24){
          this.profund = "16.5 cm de comisura",
          console.log(this.profund);
        } else if (this.peso >= 24 && this.peso < 30){
          this.profund = "17 - 18 cm de comisura",
          console.log(this.profund);
        } else if (this.peso >= 30 && this.peso < 36){
          this.profund = "18.5 - 19 cm de comisura",
          console.log(this.profund);
        } else if (this.peso >= 36){
          this.profund = "21 - 23 cm de comisura",
          console.log(this.profund);
        }

        //calcular Neumotorax 
        if (this.peso < 3){
          this.neumotorax  = "Tubo 8-10F, en 5ºeic, línea axilar anterior",
          console.log(this.neumotorax);
        } else if (this.peso >= 3 && this.peso < 9){
          this.neumotorax = "Tubo 10-12F, en 5ºeic, línea axilar anterior",
          console.log(this.neumotorax);
        } else if (this.peso >= 9 && this.peso < 16){
          this.neumotorax = "Tubo 12-16F, en 5ºeic, línea axilar anterior",
          console.log(this.neumotorax);
        } else if (this.peso >= 16 && this.peso < 40){
          this.neumotorax = "Tubo 16-20F, en 5ºeic, línea axilar anterior",
          console.log(this.neumotorax);
        } else if (this.peso >= 40){
          this.neumotorax = "Tubo 20-24F, en 5ºeic, línea axilar anterior",
          console.log(this.neumotorax);
        }
      })
      this.startTimer();

  }
  
  
  RegresarInicio() {
    // Aquí rediriges a la primera página, por ejemplo, '/inicio'
    this.router.navigateByUrl('/operaciones');
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.currentTime++;
    }, 1000);
  }

  formatTime() {
    const minutes: number = Math.floor(this.currentTime / 60);
    const seconds: number = this.currentTime % 60;
    return `${this.formatDigits(minutes)}:${this.formatDigits(seconds)}`;
  }

  formatDigits(value: number): string {
    return value < 10 ? `0${value}` : value.toString();
  }

}


