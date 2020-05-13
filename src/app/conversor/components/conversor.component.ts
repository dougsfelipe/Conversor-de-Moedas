import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Moeda, Conversao, ConversaoResponse } from '../models';
import { MoedaService, ConversorService } from '../services';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  moedas: Moeda [];
  conversao: Conversao;
  possuiErro: boolean;
  conversaoResponse: ConversaoResponse;


  constructor(private moedaService: MoedaService, private conversorService: ConversorService) { }

  init(): void {
    this.conversao = new Conversao('USD','BRL', null);
    this.possuiErro = false;
  }


  ngOnInit(): void {
    this.moedas = this.moedaService.listarTodas();
    this.init();
  }

  converter(): void {
   // if(this.conversaoForm.form.valid){
   //   alert('Convertendo: ' + JSON.stringify(this.conversao))
   // }
  }



}
