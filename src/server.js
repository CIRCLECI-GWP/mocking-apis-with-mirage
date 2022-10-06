import { Server, Model } from 'miragejs';

let todos = [
    { id: 1, name: "Groom the cat" },
    { id: 2, name: "Do the dishes" },
    { id: 3, name: "Go shopping" }
]

export function makeServer() {
    let server = new Server({

        models: {
            todo: Model
        },

        seeds(server) {
            server.create("todo", { name: "Groom the cat" })
            server.create("todo", { name: "Do the dishes" })
            server.create("todo", { name: "Go shopping" })
        },

        routes() {
            // GET REQUEST
            this.get("/api/todos", (schema, request) => {
                return schema.todos.all()
            })

            // POST REQUEST
            this.post("/api/todos", (schema, request) => {
                const attrs = JSON.parse(request.requestBody)
                return schema.todos.create(attrs)
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
