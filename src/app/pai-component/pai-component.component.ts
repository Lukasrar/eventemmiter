

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pai-component',
  templateUrl: './pai-component.component.html',
  styleUrls: ['./pai-component.component.css']
})
export class PaiComponentComponent implements OnInit {

  familia: Object[]

  constructor() {

    this.familia = [
      {nome: 'Vitor',
      sobreNome: 'Borges'},
      {nome: 'Carlos',
      sobreNome: 'Dantas'}
    ]
   }

  ngOnInit(): void {
    console.log(this.familia)
  }

  receberFeedBack(respostaFilho) {
    console.log('foi emitido o evento e chegou ao pai', respostaFilho)
  }

}
