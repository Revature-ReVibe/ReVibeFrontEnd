import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Like } from '../models/Like';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(private http: HttpClient) { }

  public getLikes(vibeId: number)
  {
    return this.http.get<Like[]>(environment.serverLocationURL + '/vibe/likes/' + vibeId); 
  }

  public postLike(vibeId: number)
  {
    return this.http.post<Like[]>(environment.serverLocationURL + '/vibe/like/' + vibeId, '');
  }

}
