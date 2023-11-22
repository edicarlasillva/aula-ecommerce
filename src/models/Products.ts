import { randomUUID } from "crypto"
import { User } from "./User"
import { Comment } from "./Comment"
import { comments } from "../database/comments"

export class Product {
  private id: string
  constructor(public name: string, public value: number) {

    this.id = randomUUID()
  }

  show(): void {
    console.log(`Produto: ${this.name}, Valor: ${this.value}`)
    const result = comments.filter(comment => comment)
  }

  addComment(content: string, user: User): void {
    const comment = new Comment(content, user, this.id)
    comments.push(comment)
    console.log("Comentário adicionado ao produto!")
    console.log(comments)
  }
}