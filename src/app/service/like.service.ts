import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Like } from '../models/Like';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(private http: HttpClient) { }

  public getLikes(vibeId: number)
  {
    return this.http.get<Like[]>('http://localhost:8088/vibe/likes/' + vibeId); 
  }

  public postLike(vibeId: number)
  {
    return this.http.post<Like[]>('http://localhost:8088/vibe/like/' + vibeId, '');
  }

}
