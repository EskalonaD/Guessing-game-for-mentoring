import { Injectable } from '@angular/core';
import { GuesserService } from './guesser.service';
import { PuzzlerService } from './puzzler.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private guesser: GuesserService, private puzzler: PuzzlerService) { }
}
