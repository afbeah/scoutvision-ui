import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { PlayerServices } from '../../core/services/player.services';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {

  private playerService = inject(PlayerServices);
  private cdr = inject(ChangeDetectorRef);

  totalPlayers: number | null = null;

  ngOnInit() {

    this.playerService.getPlayers().subscribe(players => {
      this.totalPlayers = players.length;

      this.cdr.detectChanges();

      console.log('TOTAL:', this.totalPlayers);

    });
  }
}
