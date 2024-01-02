import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento!: Pensamento
  @Input() listaFavoritos: Pensamento[] = []

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
  }

  larguraPensamento() {
    if(this.pensamento.conteudo.length > 256)
      return "pensamento-g"

    return "pensamento-p"
  }

  iconeFavorito(): string {
    if(this.pensamento.favorito === false)
      return "inativo"

    return "ativo"
  }

  alterarFavorito() {
    this.service.alterarFavorito(this.pensamento).subscribe(() => {
      this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.pensamento), 1)
    })
  }

}
