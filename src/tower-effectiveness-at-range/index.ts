/**
 * Calculate the effectiveness of a tower at the given range
 * 
 * @param range The range to calculate effectiveness at e.g. `tower.pos.getRangeTo(target)`
 * @param max The power of the tower, e.g. `TOWER_POWER_ATTACK`
 */
export default function towerEffectivenessAtRange(range: number, max: number): number {
if (range <= TOWER_OPTIMAL_RANGE) {
return max
}
if(range >= TOWER_FALLOFF_RANGE) {
return max * (1 - TOWER_FALLOFF)
}

const towerFalloffPerTile = TOWER_FALLOFF / (TOWER_FALLOFF_RANGE - TOWER_OPTIMAL_RANGE)

return max * (1 - (range - TOWER_OPTIMAL_RANGE) * towerFalloffPerTile)
}
