import { Server } from 'miragejs';

let todos = [
    { id: 1, name: "Groom the cat" },
    { id: 2, name: "Do the dishes" },
    { id: 3, name: "Go shopping" }
]

export function makeServer() {
    let server = new Server({
        routes() {
            // GET REQUEST
            this.get("/api/todos", () => {
                return {
                    todos
                }
            })
        }
    })

    return server
}
