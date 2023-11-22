import { randomUUID } from "crypto"
import { User } from "./User"

export class Comment {
  private id: string
  constructor(public content: string, private user: User, private productId: string) {
    this.id = randomUUID()
  }
} 