/**
 * Counts the number of `countPart` the creep has.
 * 
 * @param creep The creep to count body parts of.
 * @param countPart The BodyPartConstant to count.
 */
export default function countBodyPart(creep: Creep, countPart: BodyPartConstant) {
  return creep.body.filter((part) => {
    return part.type === countPart
  }).length
}
