import { Injectable } from '@nestjs/common';
import { type } from 'os';
export type User = any;

@Injectable()
export class UsersService {
    private readonly User = [
        {
          id: 1,
          name: 'Isaiah Etukudo',
          username: 'Isaiah32',
          password: 'ability',
        },

        {
          id: 2,
          name: 'Emediong Samuel',
          username: 'Emediong32',
          password: 'work',
          email: 'emey42@999',
          LGA: 'nist',
          contact: '070753374'

        },

        {
          id: 3,
          name: 'Ability Etuk',
          username: 'abiity21',
          password: 'pass'
        },

      ];
      async findOne(username: string): Promise<User | undefined> {
        return await this.User.find(user => user.username === username);
      }
}
