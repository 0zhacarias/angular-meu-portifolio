import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-projectos',
  templateUrl: './card-projectos.component.html',
  styleUrls: ['./card-projectos.component.css']
})
export class CardProjectosComponent implements OnInit {

  @Input()
  fotoCapa:string=''
@Input()
  titulo:string="Testando a injecao"
  @Input()
  descricao:string="Descrição do projecto"
  @Input()
  tecnologia_usada:string="tecnologias utilizada"

  @Input()
  Id:string="0"
  constructor() { }

  ngOnInit(): void {
  }

}
