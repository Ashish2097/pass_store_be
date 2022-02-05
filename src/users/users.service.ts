import { Injectable } from '@nestjs/common';
import { User } from './users.interface';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      userId: 1,
      email: 'ashishduklann@gmail.com',
      password: '1234',
    },
    {
      userId: 2,
      email: 'maria',
      password: 'guess',
    },
  ];

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }
}
