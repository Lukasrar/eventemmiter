import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit {

  @Input() receberFamilia;
  @Output() respostaFamilia = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    console.log(this.receberFamilia)
    console.log("Objeto familia recebido do component pai via input", this.receberFamilia)
  }

  feedBack() {
    console.log("resposta para componente pai", this.respostaFamilia.emit({"nome":"raimundo", "sobrenome": "nonato"}))
  }

}
