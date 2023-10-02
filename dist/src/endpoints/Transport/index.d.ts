import { BaseEndpoint } from "../Base";
import * as endpoints from "./endpoints";
export declare class Transport extends BaseEndpoint {
    depots: endpoints.Depots;
    drivers: endpoints.Drivers;
    pickups: endpoints.Pickups;
    positions: endpoints.Positions;
    postcodes: endpoints.Postcodes;
    regions: endpoints.Regions;
    routes: endpoints.Routes;
    statuses: endpoints.Statuses;
    steps: endpoints.Steps;
    tasks: endpoints.Tasks;
    unassigned: endpoints.Unassigned;
    vehicles: endpoints.Vehicles;
    warehouse: endpoints.Warehouse;
    constructor(httpClient: BaseEndpoint["httpClient"]);
}
