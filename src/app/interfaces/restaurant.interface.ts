import { GeoPoint } from './geopoint.interface';

export interface Restaurant {
  address?: string;
  coordinates?: GeoPoint;
  cuisine?: string[];
  description?: string;
  gallery?: string[]
  main_image?: string;
  name?: string;
  score_amount?: number;
  score_sum?: number;
  tags?: string[];
}
