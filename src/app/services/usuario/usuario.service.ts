import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public hhtp: HttpClient) {
    console.log('Servicio de usuario liost'); 
  }

  crearUsuario(usuario: Usuario){

  }

  
}
