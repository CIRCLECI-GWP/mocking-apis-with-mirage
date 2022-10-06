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

            // POST REQUEST
            this.post("/api/todos", (schema, request) => {
                const attrs = JSON.parse(request.requestBody)
                attrs.id = Math.floor(Math.random() * 1000)
                todos.push(attrs)

                return { todo: attrs }
            })

            // DELETE TODO
            this.delete("/api/todos/:id", (schema, request) => {
                const id = request.params.id
                return schema.todos.find(id).destroy()
            })
        }
    })

    return server
}
