import { degreesToRadians } from './degreesToRadians';

/**
 * Calculates the distance between two geographical points given their latitude and longitude using the Haversine formula.
 * 
 * @param lat1 - Latitude of the first point.
 * @param lon1 - Longitude of the first point.
 * @param lat2 - Latitude of the second point.
 * @param lon2 - Longitude of the second point.
 * @returns The distance between the two points in kilometers.
 * @throws Will throw an error if any of the inputs are NaN.
 */
export function calculateHaversineDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    if (isNaN(lat1) || isNaN(lon1) || isNaN(lat2) || isNaN(lon2)) {
        throw new Error('All inputs must be numbers');
    }
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = degreesToRadians(lat2 - lat1);
    const dLon = degreesToRadians(lon2 - lon1);
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(degreesToRadians(lat1)) * Math.cos(degreesToRadians(lat2)) * (Math.sin(dLon / 2) ** 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

// Example usage:
// calculateHaversineDistance(52.5200, 13.4050, 48.8566, 2.3522); // Distance between Berlin and Paris