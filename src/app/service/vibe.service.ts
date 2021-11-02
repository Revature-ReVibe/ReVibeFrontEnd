import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Vibe} from "../models/Vibe";

@Injectable({
  providedIn: 'root'
})
export class VibeService {

  constructor(private httpClient: HttpClient) { }

  getAllVibes() {
    return this.httpClient.get(environment.serverLocationURL + '/vibe/all/post') as Observable<Vibe[]>;
  }

  getVibeById(id: number) {
    return this.httpClient.get(environment.serverLocationURL + '/vibe/find/' + id) as Observable<Vibe>;
  }

  createNewVibe(vibe: Vibe) {
    return this.httpClient.post(environment.serverLocationURL + '/vibe/createVibe', JSON.stringify(vibe)) as Observable<Vibe>;
  }

  createNewReply(reply: Vibe, parentId: number) {
    return this.httpClient.post(environment.serverLocationURL + '/vibe/createReply/' + parentId, JSON.stringify(reply)) as Observable<Vibe>;
  }

  getAllReplies(parentId: number) {
    return this.httpClient.get(environment.serverLocationURL + '/vibe/allReplies/' + parentId) as Observable<Vibe[]>;
  }

  getVibesByCurrentUser() {
    return this.httpClient.get(environment.serverLocationURL + 'vibe/find/account') as Observable<Vibe[]>;
  }
}
