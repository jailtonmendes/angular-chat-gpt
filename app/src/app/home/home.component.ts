import { ApiService } from './../services/api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  pergunta!: string;
  resposta!: string;
  loading!: string;
  animarLoading: boolean = false;

  constructor(private apService: ApiService) {

  }

  enviarPerguntar() {
    console.log('Perguntando...')

    this.apService.perguntar(this.pergunta)
    .subscribe((data: any) => {
      console.log('data', data)
      const texto = data.choices[0].text;
      this.efeitoDigitando(texto);
    })

  }

  efeitoDigitando(texto: string) {
    const textoArray = texto.split('');

    this.resposta = '';

    textoArray.forEach((letra, i) => {
      setTimeout(() => {
        this.resposta += letra;

      }, 75 * i);
    })
    console.log('array', this.resposta)
  }


}
