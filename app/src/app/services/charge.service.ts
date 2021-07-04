import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Professeur } from '../models/professeur.model';
import { Charge } from '../models/charge.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ChargeService {
  constructor(private http: HttpClient) {}

  createCharge(body: Charge, ProfID: number) {
    const host = environment.host;
    return this.http.post(`${host}/professeurs/${ProfID}/charge`, body);
  }
  updateCharge(chargeTotal: number, ProfID: number) {
    const host = environment.host;
    return this.http.put(`${host}/professeurs/${ProfID}/charge`, {
      chargeTotal: chargeTotal,
    });
  }
}
