import { BaseEndpoint } from "../../Base"
import { components, operations } from "../../../lib/api"

export class Pickups extends BaseEndpoint {
  public async get(
    query: operations["getPickupCollection"]["parameters"]["query"]
  ) {
    return this.httpClient.GET("/transport/pickups", { params: { query } })
  }

  public async getById(id: string) {
    return this.httpClient.GET(`/transport/pickups/{id}`, {
      params: { path: { id } }
    })
  }

  public excluded = {
    get: async (
      query: operations["getExcludedPickupCollection"]["parameters"]["query"]
    ) => {
      return this.httpClient.GET("/transport/excluded_pickups", {
        params: { query }
      })
    },
    getById: async (id: string) => {
      return this.httpClient.GET(`/transport/excluded_pickups/{id}`, {
        params: { path: { id } }
      })
    },
    create: async (
      body: components["schemas"]["ExcludedPickup-transport-excluded_pickup-collection-write"]
    ) => {
      return this.httpClient.POST("/transport/excluded_pickups", { body })
    },
    updateById: async (
      id: string,
      body: components["schemas"]["ExcludedPickup-transport-excluded_pickup-collection-write"]
    ) => {
      return this.httpClient.PATCH(`/transport/excluded_pickups/{id}`, {
        params: { path: { id } },
        body
      })
    },
    replaceById: async (
      id: string,
      body: components["schemas"]["ExcludedPickup-transport-excluded_pickup-collection-write"]
    ) => {
      return this.httpClient.PUT(`/transport/excluded_pickups/{id}`, {
        params: { path: { id } },
        body
      })
    }
  }

  public requests = {
    get: async (
      query: operations["getPickupRequestCollection"]["parameters"]["query"]
    ) => {
      return this.httpClient.GET("/transport/pickup_requests", {
        params: { query }
      })
    },
    getById: async (id: string) => {
      return this.httpClient.GET(`/transport/pickup_requests/{id}`, {
        params: { path: { id } }
      })
    },
    create: async (body: components["schemas"]["TransportPickupRequest"]) => {
      return this.httpClient.POST("/transport/pickup_requests", { body })
    },
    updateById: async (
      id: string,
      body: components["schemas"]["TransportPickupRequest-transport-pickup_request-item-write"]
    ) => {
      return this.httpClient.PATCH(`/transport/pickup_requests/{id}`, {
        params: { path: { id } },
        body
      })
    },
    deleteById: async (id: string) => {
      return this.httpClient.DELETE(`/transport/pickup_requests/{id}`, {
        params: { path: { id } }
      })
    },
    replaceById: async (
      id: string,
      body: components["schemas"]["TransportPickupRequest-transport-pickup_request-item-write"]
    ) => {
      return this.httpClient.PUT(`/transport/pickup_requests/{id}`, {
        params: { path: { id } },
        body
      })
    }
  }

  public schedules = {
    get: async (
      query: operations["getPickupScheduleCollection"]["parameters"]["query"]
    ) => {
      return this.httpClient.GET("/transport/pickup_schedules", {
        params: { query }
      })
    },
    getById: async (id: string) => {
      return this.httpClient.GET(`/transport/pickup_schedules/{id}`, {
        params: { path: { id } }
      })
    },
    create: async (body: components["schemas"]["PickupSchedule"]) => {
      return this.httpClient.POST("/transport/pickup_schedules", { body })
    },
    updateById: async (
      id: string,
      body: components["schemas"]["PickupSchedule-transport-pickup_schedule-item-write"]
    ) => {
      return this.httpClient.PATCH(`/transport/pickup_schedules/{id}`, {
        params: { path: { id } },
        body
      })
    },
    replaceById: async (
      id: string,
      body: components["schemas"]["PickupSchedule-transport-pickup_schedule-item-write"]
    ) => {
      return this.httpClient.PUT(`/transport/pickup_schedules/{id}`, {
        params: { path: { id } },
        body
      })
    }
  }
}
