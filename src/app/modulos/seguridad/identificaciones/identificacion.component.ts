import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from 'node_modules copy/@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

const cryptoJS = require('crypto-js');
/* ./identificacion.component.html*/
@Component({
  selector: 'app-identificacion',
  templateUrl:'./identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    'usuario': ['', [Validators.required, Validators.email]],
    'clave': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService) {} 
 
    ngOnInit(): void {
    /*setInterval(()=>{
      this.fgValidador.controls['usuario'].setValue(Math.random()*1000 )
    },2000)*/
  }

  IdentificarUsuario() {
    let usuario = this.fgValidador.controls["usuario"].value;
    let clave = this.fgValidador.controls["clave"].value;
    alert(usuario)
    alert(clave)
    let claveCifrada = cryptoJS.MD5(clave);
   
    this.servicioSeguridad.Identificar(usuario, claveCifrada).subscribe((datos:any)=>{
      //ok
      alert("Datos Correctos")
    },(error:any)=>{
      //KO
      alert("Datos Invalidos")
    })

  }
}
