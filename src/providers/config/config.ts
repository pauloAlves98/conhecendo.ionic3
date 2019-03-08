import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfigProvider {
  
  constructor() {

  }
  //buscar
  getConfig():any{
    return localStorage.getItem("config");
  }
  //gravar
  setConfig(showSlide?:boolean, nome?:string,username?:string):void{
      let config = {
        showSlide:false,
        nome: " ",
        username:" "
      }
      if(showSlide){
        config.showSlide = showSlide;
      }
      if(nome){
        config.nome = nome;
      }
      if(username){
        config.username = username;
      }
      localStorage.setItem("config",JSON.stringify(config));
  }
}
