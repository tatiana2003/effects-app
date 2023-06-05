import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  usuarios:Usuario[] = [];
  constructor(private usuarioService:UsuarioService){

  }
  ngOnInit(): void {
    this.usuarioService.getUsers().subscribe((res)=>{
      this.usuarios =res;  
      console.log(res)
    })
  }

}
