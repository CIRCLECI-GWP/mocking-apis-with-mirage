import { Server } from 'miragejs';

export function makeServer() {
    let server = new Server({
        routes() {
            // GET REQUEST
            this.get("/api/todos", () => {
                return {}
            })
        }
    })

    return server
}
