import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BasicComponent } from './basic/basic.component';
import { CalculatriceComponent } from './basic/calculatrice/calculatrice.component';
import { TvaComponent } from './basic/tva/tva.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SubComponentMonoDirectionComponent } from './welcome/sub-component-mono-direction/sub-component-mono-direction.component';
import { SubComponentTwoDirectionsComponent } from './welcome/sub-component-two-directions/sub-component-two-directions.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { ConversionComponent } from './conversion/conversion.component';
import { RechercheProduitSeuilComponent } from './recherche-produit-seuil/recherche-produit-seuil.component';
import { SeuilComponent } from './recherche-produit-seuil/seuil/seuil.component';
import { ListProdComponent } from './recherche-produit-seuil/list-prod/list-prod.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasicComponent,
    CalculatriceComponent,
    TvaComponent,
    UserComponent,
    WelcomeComponent,
    SubComponentMonoDirectionComponent,
    SubComponentTwoDirectionsComponent,
    ConversionComponent,
    RechercheProduitSeuilComponent,
    SeuilComponent,
    ListProdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
