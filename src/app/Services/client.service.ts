import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IClients} from "../Interfaces/clients";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient: HttpClient) {
  }

  getClientList(): Observable<IClients[]> {
    return this.httpClient.get<IClients[]>('assets/JSON-File/data.json')
  }
}
