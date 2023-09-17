import { Component, OnInit } from '@angular/core';
import { UsersService } from '../create-user/shared/services/users/users.service';
import { User } from 'src/app/models/user.model';



@Component({
  selector: 'list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {
  userList: User[] = [];
  searchQuery: string = '';
  filteredUsers: User[] = this.userList;


  constructor(private userService: UsersService) {}

  async ngOnInit(): Promise<void> {
    try {
      await this.loadUserList();
    } catch (err) {
      console.error('Error al cargar la lista de usuarios en ngOnInit', err);
    }
  }


  async loadUserList(): Promise<void> {
    try {
      const res = await this.userService.getUsers();
      const { data } = res;
      this.userList = data;
    } catch (err) {
      console.error('Error al cargar la lista de usuarios', err);
    }
  }
  /* loadUserList(): void {
    this.userService.getUsers().subscribe({
      next: (res: any) => {
        const { data } = res;
        this.userList = data;
      },
          error: (err) => console.error('Error al cargar la lista de usuarios', err),
    });
  } */


  deleteUser(index: number): void {
    console.log(this.userList[index].id)
    if (confirm('¿Seguro que deseas eliminar este usuario?')) {
      this.userService.deleteUserForIndex(this.userList[index].id).subscribe(() => {
        this.userList.splice(index, 1); // Elimina el usuario de la lista local
        alert('Usuario eliminado correctamente');
      });
    }
  }


  filterUsers() {
   if (this.searchQuery) {
    const query = this.searchQuery.toLowerCase();
    this.userList = this.userList.filter(user => {
      const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
      return fullName.includes(query) || user.email.toLowerCase().includes(query);
    });
  } else {
    this.loadUserList();
  }
  }




}
