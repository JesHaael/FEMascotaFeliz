import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit{
 
  fgValidador: FormGroup = this.fb.group({
    'nombre': ['',[Validators.required]],
    'precio': ['',[Validators.required]],
    'tipo': ['',[Validators.required]],
    'descripcion': ['',[Validators.required]]
  });
  
  constructor(private fb: FormBuilder,
    private servicioProducto: ProductoService,
    private router:Router){}
    ngOnInit():void{
  }
  GuardarProducto(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let precio = this.fgValidador.controls["precio"].value;
    //let precio = parseInt(this.fgValidador.controls["precio"].value);
    let descripcion = this.fgValidador.controls["descripcion"].value;
    let tipo = this.fgValidador.controls["tipo"].value;
    let p = new ModeloProducto();
    p.nombre = nombre;
    p.precio = precio;
    p.descripcion = descripcion;
    p.tipo=tipo;
    this.servicioProducto.CrearProducto(p).subscribe((datos:ModeloProducto) => {
      alert("prducto almacenado corrrectamente");
      this.router.navigate(["/administracion/buscar-productos"])

    }, (error: any) => {
       alert("Error almacenando producto")
    })

  }
}
