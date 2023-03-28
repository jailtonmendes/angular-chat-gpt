import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {

  }

  perguntar(pergunta: string) {

    const headers = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer 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'
    });

    const body = {
      model: 'text-davinci-003',
      prompt: pergunta,
      max_tokens: 2048,
      temperature: 0.5
    };


    return this.httpClient.post(enviroment.BASE_URL, body, { headers });

  }

}


// cirurgião ginocológico
// cirurgião

// POST

// perguntar(pergunta: string) {

// }


// headers: {
//    Accept: "application/json",
//    "Content-type": "application/json",
//    Authorization: "Bearer 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"
// }

// body: JSON.stringfy({
//   model: "text-davinci-003",
//   prompt: pergunta %pergunta digitada%
//   max_tokens: 2048,
//   temperature: 0.5
// })
