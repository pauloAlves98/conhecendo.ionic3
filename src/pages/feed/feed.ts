import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { DetalhesPage } from '../detalhes/detalhes';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [//Isso foi adicionado
    MovieProvider
  ]
})
export class FeedPage {
  public variavel:string ="P Alves";
  public obj_feed = {//Obj json
    titulo:"P Alves",
    data:"November 5, 1955",
    descricao:"Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
    likes:12,
    comentarios:4,
    hora:"11h ago"
  }
  public listaFilmes: Array<any> = [];
  public loader;
  public refresher;
  public isRefresh:boolean =false;
  public ultimaPag = 1;
  public infiniteScroll;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    public loadingCtrl: LoadingController
    ) {
  }
  abreCarregando() {
      this.loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    this.loader.present();
  }
  fechaCarregando(){
    this.loader.dismiss();
  }

  public somaDoisNumeros(n1:number,n2:number):void{
    alert(n1+n2);
  }
  ionViewDidEnter() {//Smp que entrar na pagina
    this.carregarFilmes();
    //this.somaDoisNumeros(10,10);
  }
  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefresh = true;
    this.ultimaPag = 1;
    console.log('Begin async operation', refresher);   
    this.carregarFilmes(); 
  }
  carregarFilmes(newpage:boolean =false){
    this.abreCarregando();
    console.log('ionViewDidEnterFeedPage');
    this.movieProvider.getLatestMovies(this.ultimaPag).subscribe(
      data=>{//se sucesso
        if(newpage){
           this.listaFilmes = this.listaFilmes.concat( (data as any).results);
           this.infiniteScroll.complete();
        }
        else
          this.listaFilmes = (data as any).results;
        console.log(this.listaFilmes);//Escreve no console
        this.fechaCarregando();
      }, error=>{
        console.log(error);
        this.fechaCarregando();
      }); 
      if(this.isRefresh){
        this.refresher.complete();
        this.isRefresh = false;
      }
      console.log("Passou Aqui:"+this.isRefresh);
  }
  abrirDetalhes(filme){
    console.log(filme);
    this.navCtrl.push(DetalhesPage,{id:filme.id});
  }
  doInfinite(infiniteScroll) {
    this.infiniteScroll = infiniteScroll;
    this.ultimaPag++;
    this.carregarFilmes(true);
  }
}
