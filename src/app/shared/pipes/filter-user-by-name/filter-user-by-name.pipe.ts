import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUserByName',
})
export class FilterUserByNamePipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText || searchText.length < 3) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter(item => {
      const fullName = `${item.first_name} ${item.last_name}`.toLowerCase();
      return fullName.includes(searchText);
    });
  }
}
