import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() { }

  async testConnection() {
    return 'Welcome to Contact Manager!';
  }
}
