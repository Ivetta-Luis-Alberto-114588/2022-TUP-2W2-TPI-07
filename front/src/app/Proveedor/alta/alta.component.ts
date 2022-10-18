import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms"
import { Subscription } from 'rxjs';
import {Proveedor} from "../../models/proveedor";
import {ProveedorServiceService} from "../../Services/proveedor-service.service"

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponentProveedor implements OnInit {

  nuevoProveedor: Proveedor ;

  formularioAltaProveedor = new  UntypedFormGroup({
    nombre : new UntypedFormControl("",[Validators.pattern(/^[a-zA-Z ]+$/)]),
    cuil : new UntypedFormControl ("", [Validators.required, Validators.pattern(/^\d{8}$/)] ),
    telefono : new UntypedFormControl("",[Validators.required, Validators.pattern(/^\d{7}$/)]),
    pais : new UntypedFormControl("",[Validators.required]),
    direccion: new UntypedFormControl("",[Validators.required, Validators.pattern(/^[a-zA-Z0-9 ]+$/)]),
    codigo_postal: new UntypedFormControl("",[Validators.required, Validators.pattern(/^\d{4}$/)]),
    email: new UntypedFormControl("",[Validators.required, Validators.email]),
    latitud: new UntypedFormControl("",[Validators.required, Validators.pattern(/^\d{2}(\.[0-9]{4,4})$/)]),
    longitud: new UntypedFormControl("",[Validators.required, Validators.pattern(/^\d{2}(\.[0-9]{4,4})$/)])

  })

  

  
  constructor(private proveedorService: ProveedorServiceService) { 
    
  }

  ngOnInit(): void {

  }
  

  guardar(){
    if(this.formularioAltaProveedor.valid){
      this.nuevoProveedor = this.formularioAltaProveedor.value
      //https://blog.angular.io/angular-v14-is-now-available-391a6db736af  UntypedFormControl y UntypedFormGroup
      
      this.proveedorService.agregarProveedor(this.nuevoProveedor).subscribe({
        next: () => {
          alert("proveedor agregado")
        },
        error: () => {
          alert("error al agregar proveedor")
        }
      })


      console.log(this.nuevoProveedor);
    } else{
      alert("formulario invalido, debe completar los campos")
    }

    
  }


}