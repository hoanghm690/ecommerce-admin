import { ApiEndpoint } from '@/constants'
import { HttpClient } from '@/lib/config/axios'

import { User } from './types'

export class UsersApi {
  private client: HttpClient

  constructor() {
    this.client = new HttpClient('/')
  }

  async getMe(): Promise<User> {
    return await this.client.get<User>(ApiEndpoint.GET_ME)
  }
}
