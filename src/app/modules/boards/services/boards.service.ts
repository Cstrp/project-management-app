import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GET_BOARDS } from 'src/app/constants/_boards';
import { _headersBoards } from 'src/app/constants/_headers-boards';
import { _httpOptions } from 'src/app/constants';

@Injectable({
  providedIn: 'root',
})
export class BoardsService {
  constructor(private http: HttpClient) {}

  public getBoards$() {
    return this.http.get(`${GET_BOARDS}`);
  }
}
