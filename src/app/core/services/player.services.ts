import { HttpClient } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { Player } from '../../shared/models/player.model';

@Injectable({
  providedIn: 'root',
})
export class PlayerServices {

  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080';

  getPlayers(){
    return this.http.get<Player[]>(
      `${this.apiUrl}/players`
    );
  }
}
