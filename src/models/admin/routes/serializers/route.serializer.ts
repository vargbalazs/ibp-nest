import { Route } from '../interfaces/route.interface';

export class RouteEntity implements Route {
  constructor(partial: Partial<RouteEntity>) {
    Object.assign(this, partial);
  }

  id: number;
  name: string;
}
