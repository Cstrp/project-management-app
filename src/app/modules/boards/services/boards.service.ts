import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GET_BOARDS } from '../../../constants/_boards';
import { _httpOptions, BASE_URL } from '../../../constants';
import { catchError, map, Observable, throwError } from 'rxjs';
import { IBoard, IColumn, ITask } from '../components';
import { IRequestUpdateBoard, IRequestUpdateTask } from 'src/app/store';
import { IRequestUpdateColumn } from 'src/app/store/columns';
import { IUser } from './models';

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
      catchError((errResp) => {
        return throwError(errResp);
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
      catchError((errResp) => {
        return throwError(errResp);
      }),
    );
  }

  public addColumn(boardId: string, column: IColumn): Observable<IColumn> {
    return this.http.post<IColumn>(`${GET_BOARDS}/${boardId}/columns`, column);
  }

  public updateColumn(boardId: string, column: IColumn, columnId: string): Observable<IColumn> {
    const requestUpdateColumn: IRequestUpdateColumn = { title: column.title, order: column.order };

    return this.http.put<IColumn>(`${GET_BOARDS}/${boardId}/columns/${columnId}`, requestUpdateColumn);
  }

  public deleteColumn(boardId: string, columnId: string): Observable<IColumn> {
    return this.http.delete<IColumn>(`${GET_BOARDS}/${boardId}/columns/${columnId}`);
  }

  public getTasksUsers(): Observable<Array<IUser>> {
    return this.http.get<Array<IUser>>(`${BASE_URL}/users`);
  }

  public getTaskUserInfo(id: string): Observable<IUser> {
    return this.http.get<IUser>(`${BASE_URL}/users/${id}`);
  }

  public getTasks(boardId: string, columnId: string): Observable<Array<ITask>> {
    return this.http.get<Array<ITask>>(`${GET_BOARDS}/${boardId}/columns/${columnId}/tasks`, _httpOptions).pipe(
      map((data) => {
        const tasks: Array<ITask> = data;

        return tasks;
      }),
      catchError((errResp) => {
        return throwError(errResp);
      }),
    );
  }

  public addTask(boardId: string, columnId: string, task: ITask): Observable<ITask> {
    return this.http.post<ITask>(`${GET_BOARDS}/${boardId}/columns/${columnId}/tasks`, task);
  }

  public updateTask(taskId: string, task: ITask): Observable<ITask> {
    const requestUpdateTask: IRequestUpdateTask = {
      title: task.title,
      order: task.order as number,
      description: task.description,
      userId: task.userId as string,
      boardId: task.boardId as string,
      columnId: task.columnId as string,
    };

    return this.http.put<ITask>(
      `${GET_BOARDS}/${task.boardId}/columns/${task.columnId}/tasks/${taskId}`,
      requestUpdateTask,
    );
  }

  public deleteTask(task: ITask): Observable<ITask> {
    return this.http.delete<ITask>(`${GET_BOARDS}/${task.boardId}/columns/${task.columnId}/tasks/${task.id}`);
  }
}
