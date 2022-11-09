import { IColumn } from '../../column';

export interface IBoard {
  id?: string;
  columns?: Array<IColumn>;
  title: string;
  description: string;
}
