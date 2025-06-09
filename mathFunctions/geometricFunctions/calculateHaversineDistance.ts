import { degreesToRadians } from './degreesToRadians';

/**
 * Calculates the distance between two geographical points given their latitude and longitude using the Haversine formula.
 *
 * @param lat1 - Latitude of the first point.
 * @param lon1 - Longitude of the first point.
 * @param lat2 - Latitude of the second point.
 * @param lon2 - Longitude of the second point.
 * @returns The distance between the two points in kilometers.
 * @throws Will throw an error if any of the inputs are NaN or out of valid range.
 */
export function calculateHaversineDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
): number {
  // Validate inputs
  if (isNaN(lat1) || isNaN(lon1) || isNaN(lat2) || isNaN(lon2)) {
    throw new Error('All inputs must be numbers');
  }
  if (lat1 < -90 || lat1 > 90 || lat2 < -90 || lat2 > 90) {
    throw new Error('Latitude values must be between -90 and 90 degrees');
  }
  if (lon1 < -180 || lon1 > 180 || lon2 < -180 || lon2 > 180) {
    throw new Error('Longitude values must be between -180 and 180 degrees');
  }

  const R = 6371.0088; // Radius of the Earth in kilometers

  // Convert latitude and longitude differences from degrees to radians
  const dLat = degreesToRadians(lat2 - lat1);
  const dLon = degreesToRadians(lon2 - lon1);

  // Apply the Haversine formula
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(degreesToRadians(lat1)) *
      Math.cos(degreesToRadians(lat2)) *
      Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // Calculate the distance
  return R * c;
}

// Example usage:
// calculateHaversineDistance(52.5200, 13.4050, 48.8566, 2.3522); // Distance between Berlin and Paris
