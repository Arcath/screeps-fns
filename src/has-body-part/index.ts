import countBodyPart from '../count-body-part'

/**
 * Checks the given creep for the body part requested.
 * 
 * @param creep The creep to check.
 * @param hasPart The BodyPart to check for.
 */
export default function hasBodyPart(creep: Creep, hasPart: BodyPartConstant) {
  return countBodyPart(creep, hasPart) > 0
}
