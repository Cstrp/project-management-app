import { ITask } from '../../task';

export interface IColumn {
  title: string;
  id?: string;
  tasks?: Array<ITask>;
  order?: number;
}
