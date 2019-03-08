import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//import {HttpModule} from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FeedPage } from '../pages/feed/feed';
import { IntroPage } from '../pages/intro/intro';
import { HttpClientModule } from '@angular/common/http';
import { MovieProvider } from '../providers/movie/movie';
import { ConfigProvider } from '../providers/config/config';
import { PerfilPage } from '../pages/perfil/perfil';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';
import { SobrePage } from '../pages/sobre/sobre';
import { DetalhesPage } from '../pages/detalhes/detalhes';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    FeedPage,
    IntroPage,
    ConfiguracoesPage,
    SobrePage,
    PerfilPage,
    DetalhesPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    FeedPage,
    IntroPage,
    ConfiguracoesPage,
    SobrePage,
    PerfilPage,
    DetalhesPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider,
    ConfigProvider
  ]
})
export class AppModule {}
