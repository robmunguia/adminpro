import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/service.index';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-sidebard',
  templateUrl: './sidebard.component.html',
  styles: []
})
export class SidebardComponent implements OnInit {

  constructor(public _sidebar: SidebarService,
  public _usuarioService: UsuarioService ) { }

  ngOnInit() {
  }

}
