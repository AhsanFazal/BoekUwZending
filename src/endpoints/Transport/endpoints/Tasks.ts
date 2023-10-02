import { BaseEndpoint } from "../../Base"

export class Tasks extends BaseEndpoint {
  public async get(query: any) {
    return this.httpClient.GET("/transport/tasks", { params: { query } })
  }

  public async getById(id: any) {
    return this.httpClient.GET(`/transport/tasks/{id}`, {
      params: { path: { id } }
    })
  }

  public async updateById(id: any, body: any) {
    return this.httpClient.PUT(`/transport/tasks/{id}`, {
      params: { path: { id } },
      body
    })
  }

  public activities = {
    get: (query: any) =>
      this.httpClient.GET("/transport/task_activities", {
        params: { query }
      }),
    getById: (id: any) =>
      this.httpClient.GET(`/transport/task_activities/{id}`, {
        params: { path: { id } }
      })
  }

  public labels = {
    get: (query: any) =>
      this.httpClient.GET("/transport/task_labels", {
        params: { query }
      }),
    getById: (id: any) =>
      this.httpClient.GET(`/transport/task_labels/{id}`, {
        params: { path: { id } }
      }),
    updateById: (id: any, body: any) =>
      this.httpClient.PUT(`/transport/task_labels/{id}`, {
        params: { path: { id } },
        body
      })
  }

  public pickups = {
    get: (query: any) =>
      this.httpClient.GET("/transport/task_pickups", {
        params: { query }
      }),
    getById: (id: any) =>
      this.httpClient.GET(`/transport/task_pickups/{id}`, {
        params: { path: { id } }
      }),
    updateById: (id: any, body: any) =>
      this.httpClient.PUT(`/transport/task_pickups/{id}`, {
        params: { path: { id } },
        body
      })
  }
}
