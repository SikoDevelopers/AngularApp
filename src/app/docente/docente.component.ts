import { Component, OnInit } from '@angular/core';
import {DocenteService} from "./docente.service";
@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent implements OnInit {

  docentes: Docente;

  constructor(private docenteService: DocenteService) { }

  ngOnInit() {
this.getDocentes();

  }

  getDocentes(){
    this.docenteService.getDocentes().subscribe(
        resul=>{
          this.docentes= resul['docentes'];
        }
    )
  }

}
