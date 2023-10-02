import { components, operations } from "../../lib/api"
import { BaseEndpoint } from "../Base"
import * as endpoints from "./endpoints"

export class Transport extends BaseEndpoint {
  public depots!: endpoints.Depots
  public drivers!: endpoints.Drivers
  public pickups!: endpoints.Pickups
  public positions!: endpoints.Positions
  public postcodes!: endpoints.Postcodes
  public regions!: endpoints.Regions
  public routes!: endpoints.Routes
  public statuses!: endpoints.Statuses
  public steps!: endpoints.Steps
  public tasks!: endpoints.Tasks
  public unassigned!: endpoints.Unassigned
  public vehicles!: endpoints.Vehicles
  public warehouse!: endpoints.Warehouse

  constructor(httpClient: BaseEndpoint["httpClient"]) {
    super(httpClient)
    this.depots = new endpoints.Depots(httpClient)
    this.drivers = new endpoints.Drivers(httpClient)
    this.pickups = new endpoints.Pickups(httpClient)
    this.positions = new endpoints.Positions(httpClient)
    this.postcodes = new endpoints.Postcodes(httpClient)
    this.regions = new endpoints.Regions(httpClient)
    this.routes = new endpoints.Routes(httpClient)
    this.statuses = new endpoints.Statuses(httpClient)
    this.steps = new endpoints.Steps(httpClient)
    this.tasks = new endpoints.Tasks(httpClient)
    this.unassigned = new endpoints.Unassigned(httpClient)
    this.vehicles = new endpoints.Vehicles(httpClient)
    this.warehouse = new endpoints.Warehouse(httpClient)
  }
}
