import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import * as cryptoJS from 'crypto-js';


//const cryptoJS = require('crypto-js');
/* ./identificacion.component.html*/
@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    'usuario': ['', [Validators.required, Validators.email]],
    'clave': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router: Router) { }

  ngOnInit(): void {
    /*setInterval(()=>{
      this.fgValidador.controls['usuario'].setValue(Math.random()*1000 )
    },2000)*/
  }

  IdentificarUsuario() {
    let usuario = this.fgValidador.controls["usuario"].value;
    let clave = this.fgValidador.controls["clave"].value;
    //alert(usuario)

    let claveCifrada = cryptoJS.MD5(clave).toString();
    alert(claveCifrada)
    /* this.servicioSeguridad.Identificar(usuario, claveCifrada).subscribe((datos:any)=>{
       //ok uardar daos devueltos
       alert("Datos Correctos")
       this.servicioSeguridad.AlmacenarSesion(datos);
       this.router.navigate(['/inicio']);
     },(error:any)=>{
       //KO
       alert("Datos Invalidos")
     })*/

    this.servicioSeguridad.Identificar(usuario, claveCifrada).subscribe(
      {
        next: (datos: any) => {
          this.servicioSeguridad.AlmacenarSesion(datos);
         alert("Esta iniciando sesion")
          this.router.navigate(["/inicio"]);
        },
        error: (error: any) => {
          alert("Datos incorrectos")
        }
      })


  }
}
