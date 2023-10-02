import { BaseEndpoint } from "../../Base"

export class Pickups extends BaseEndpoint {
  public async get(query: any) {
    return this.httpClient.GET("/transport/pickups", { params: { query } })
  }

  public async getById(id: any) {
    return this.httpClient.GET(`/transport/pickups/{id}`, {
      params: { path: { id } }
    })
  }

  public excluded = {
    get: async (query: any) => {
      return this.httpClient.GET("/transport/excluded_pickups", {
        params: { query }
      })
    },
    getById: async (id: any) => {
      return this.httpClient.GET(`/transport/excluded_pickups/{id}`, {
        params: { path: { id } }
      })
    },
    create: async (body: any) => {
      return this.httpClient.POST("/transport/excluded_pickups", { body })
    },
    updateById: async (id: any, body: any) => {
      return this.httpClient.PATCH(`/transport/excluded_pickups/{id}`, {
        params: { path: { id } },
        body
      })
    },
    replaceById: async (id: any, body: any) => {
      return this.httpClient.PUT(`/transport/excluded_pickups/{id}`, {
        params: { path: { id } },
        body
      })
    }
  }

  public requests = {
    get: async (query: any) => {
      return this.httpClient.GET("/transport/pickup_requests", {
        params: { query }
      })
    },
    getById: async (id: any) => {
      return this.httpClient.GET(`/transport/pickup_requests/{id}`, {
        params: { path: { id } }
      })
    },
    create: async (body: any) => {
      return this.httpClient.POST("/transport/pickup_requests", { body })
    },
    updateById: async (id: any, body: any) => {
      return this.httpClient.PATCH(`/transport/pickup_requests/{id}`, {
        params: { path: { id } },
        body
      })
    },
    deleteById: async (id: any) => {
      return this.httpClient.DELETE(`/transport/pickup_requests/{id}`, {
        params: { path: { id } }
      })
    },
    replaceById: async (id: any, body: any) => {
      return this.httpClient.PUT(`/transport/pickup_requests/{id}`, {
        params: { path: { id } },
        body
      })
    }
  }

  public schedules = {
    get: async (query: any) => {
      return this.httpClient.GET("/transport/pickup_schedules", {
        params: { query }
      })
    },
    getById: async (id: any) => {
      return this.httpClient.GET(`/transport/pickup_schedules/{id}`, {
        params: { path: { id } }
      })
    },
    create: async (body: any) => {
      return this.httpClient.POST("/transport/pickup_schedules", { body })
    },
    updateById: async (id: any, body: any) => {
      return this.httpClient.PATCH(`/transport/pickup_schedules/{id}`, {
        params: { path: { id } },
        body
      })
    },
    replaceById: async (id: any, body: any) => {
      return this.httpClient.PUT(`/transport/pickup_schedules/{id}`, {
        params: { path: { id } },
        body
      })
    }
  }
}
