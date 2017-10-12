import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DocenteService {

  constructor(private http :HttpClient) {


  }

  getDocentes(): Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/docentes');
  }

}
