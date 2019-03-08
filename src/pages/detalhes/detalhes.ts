import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the DetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
  providers:[
    MovieProvider
  ]
})
export class DetalhesPage {
  public filme;
  public codFilme;
  constructor(public navCtrl: NavController, public navParams: NavParams, public movieProvider:MovieProvider) {
  }

  ionViewDidEnter() {
    this.codFilme = this.navParams.get("id");
    console.log('ionViewDidEnter DetalhesPage');
    this.movieProvider.getMovieDetalhes(this.codFilme).subscribe(//Subriscribe avisa quando recebe a resposta
      data=>{
        console.log(data);
        this.filme = data;//Acessa o corpo porque não tem results
      },
      error=>{
        console.log(error);
      }
    );
  }

}
