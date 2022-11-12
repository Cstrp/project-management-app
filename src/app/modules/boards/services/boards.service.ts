import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../../../services/local-storage.service';
import { GET_BOARDS } from '../../../constants/_boards';
import { _httpOptions } from '../../../constants';

@Injectable({
  providedIn: 'root',
})
export class BoardsService {
  constructor(private http: HttpClient, private localService: LocalStorageService) {}

  public getBoards() {
    return this.http.get(GET_BOARDS, _httpOptions);
  }
}
