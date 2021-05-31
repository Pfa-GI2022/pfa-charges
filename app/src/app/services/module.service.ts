import { Injectable } from '@angular/core';
import { Module} from "../models/module.model";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor(private http: HttpClient) { 
    
  }
  getAllModules():Observable<Module[]>{
    const host = environment.host;
    return this.http.get<Module[]>(`${host}/modules`);
  }
  getModuleByID(id:number):Observable<Module>{
    const host = environment.host;
    return this.http.get<Module>(`${host}/modules/ ${id}`);
  }

  deleteModuleid(id:number){
    const host = environment.host;
    return this.http.delete(`${host}/modules/${id}`);
  }

  createModule(body:Module){
    const host = environment.host;
    console.log('create module')
    return this.http.post(`${host}/modules`,body);  

  }
}
