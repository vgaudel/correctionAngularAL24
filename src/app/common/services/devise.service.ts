import { Injectable } from '@angular/core';
import { Devise } from '../data/Devise';
import { Observable, delay, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface ConvertResult {
  source :string; //ex: "EUR",
  target :string; //ex: "USD",
  amount :number; //ex: 200.0
  result :number; //ex: 217.3913
};

@Injectable({
  providedIn: 'root'
})
export class DeviseService {

  //_apiBaseUrl = "https://www.d-defrance.fr/tp/devise-api";
  _apiBaseUrl = "/tp/devise-api";


  public getAllDevises$(): Observable<Devise[]> {
    let url = this._apiBaseUrl + "/public/devise";
    return this._http.get<Devise[]>(url);
  }

  public convertir$(montant: number,
    codeDeviseSrc: string,
    codeDeviseTarget: string
  ): Observable<number> {

    let url = this._apiBaseUrl + "/public/convert"
      + `?source=${codeDeviseSrc}`
      + `&target=${codeDeviseTarget}`
      + `&amount=${montant}`;
    console.log("url = " + url);
    return this._http.get<ConvertResult>(url)
      .pipe(
        map((res: ConvertResult) => res["result"])
      );
  }


  constructor(private _http: HttpClient) { }
}
