import { Injectable } from '@nestjs/common';
import { User } from 'src/users/users.interface';
import * as mockData from 'src/mock/pass.json';

@Injectable()
export class PassService {
  async getPasswords(user: User) {
    const userCreds = mockData.find(
      (userData) => userData.email === user.email,
    );

    return userCreds;
  }
}
