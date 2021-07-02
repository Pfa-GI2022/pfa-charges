import { Injectable } from '@angular/core';
import { activitePedagogiques } from '../models/activite.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ActiviteService {

  constructor(private http: HttpClient) { }


getAllActivities(): Observable < activitePedagogiques[] > {
  const host = environment.host;
  return this.http.get<activitePedagogiques[]>(`${host}/activitepedagogiques`);
}
  getActivityByID(id: number): Observable< activitePedagogiques > {
  const host = environment.host;
    return this.http.get<activitePedagogiques>(`${host}/activitepedagogiques/ ${id}`);
}

deleteActivityByid(id: number){
  const host = environment.host;
  return this.http.delete(`${host}/activitepedagogiques/${id}`);
}

  createActivity(body: activitePedagogiques){
  const host = environment.host;
  console.log('Create activity')
    return this.http.post(`${host}/activitepedagogiques`, body);
}

  updateActivity(body :any,id:number){
    const host = environment.host;
    return this.http.put(`${host}/activitepedagogiques/${id}`,body) 
   }
}