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
    await this.loadUserList();
  }



  async loadUserList(): Promise<void> {
    try {
      const {data} = await this.userService.getUsers();
      this.userList = data;
    } catch (err) {
      console.error('Error al cargar la lista de usuarios', err);
    }
  }

  async deleteUser(index: number): Promise<void> {
    try {
      const userId = this.userList[index].id;
      const confirmation = confirm('¿Seguro que deseas eliminar este usuario?');

      if (confirmation) {
        await this.userService.deleteUserForIndex(userId);
        this.userList.splice(index, 1); // Elimina el usuario de la lista local
        alert('Usuario eliminado correctamente');
      }
    } catch (error) {
      console.error('Error al eliminar el usuario', error);
    }
  }


  filterUsers() {
    if (this.searchQuery.length >= 3) {
      console.log(this.searchQuery)
      const query = this.searchQuery.toLowerCase();
      if (this.userList) {
        this.userList = this.userList.filter(user => {
          const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
          return fullName.includes(query) || user.email.toLowerCase().includes(query);
        });
      }
    }else{
      this.loadUserList();
    }
  }


}
