import { Pipe, PipeTransform } from '@angular/core';
import { IBoard } from '../index';

@Pipe({
  name: 'sortByTitle',
})
export class SortByTitlePipe implements PipeTransform {
  transform(boards: IBoard[], query: string) {
    if (boards && query) {
      boards = boards.filter((i) => i.title.toLowerCase().indexOf(query.toLowerCase()) > -1);

      return boards;
    }

    return boards;
  }
}
