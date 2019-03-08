import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()//Vai ser usado por outra classe.(no construtor)
export class MovieProvider {
  public base: string="https://api.themoviedb.org/3";
  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }
  getLatestMovies(page=1,l="pt-PT"){
    return this.http.get(this.base+`/movie/popular?page=${page}&language=${l}&api_key=7e49224ec4fcd1a2a857322c25e9613c`);//Busca as infos
  }
  getMovieDetalhes(filmeid){
    return this.http.get(this.base+`/movie/${filmeid}?api_key=7e49224ec4fcd1a2a857322c25e9613c`);//Busca as infos
  }
}
