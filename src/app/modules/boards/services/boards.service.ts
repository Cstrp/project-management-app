import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../../../services/local-storage.service';
import { GET_BOARDS } from '../../../constants/_boards';
import { _httpOptions } from '../../../constants';
import { Observable, map } from 'rxjs';
import { IBoard, IColumn } from '../components';
import { IRequestUpdateBoard } from 'src/app/store';

@Injectable({
  providedIn: 'root',
})
export class BoardsService {
  constructor(private http: HttpClient) {}

  public getBoards(): Observable<Array<IBoard>> {
    return this.http.get<Array<IBoard>>(GET_BOARDS, _httpOptions).pipe(
      map((data) => {
        const boards: Array<IBoard> = data;

        return boards;
      }),
    );
  }

  public addBoard(board: IBoard): Observable<IBoard> {
    return this.http.post<IBoard>(GET_BOARDS, board);
  }

  public updateBoard(board: IBoard): Observable<IBoard> {
    const requestUpdateBoard: IRequestUpdateBoard = { title: board.title, description: board.description };

    return this.http.put<IBoard>(`${GET_BOARDS}/${board.id}`, requestUpdateBoard);
  }

  public deleteBoard(id: string): Observable<IBoard> {
    return this.http.delete<IBoard>(`${GET_BOARDS}/${id}`);
  }

  public getBoardById(id: string): Observable<IBoard> {
    return this.http.get<IBoard>(`${GET_BOARDS}/${id}`);
  }

  public getColumns(boardId: string): Observable<Array<IColumn>> {
    return this.http.get<Array<IColumn>>(`${GET_BOARDS}/${boardId}/columns`, _httpOptions).pipe(
      map((data) => {
        const columns: Array<IColumn> = data;
        return columns;
      }),
    );
  }

  public addColumn(boardId: string, column: IColumn): Observable<IColumn> {
    console.log(boardId);
    return this.http.post<IColumn>(`${GET_BOARDS}/${boardId}/columns`, column);
  }
}
