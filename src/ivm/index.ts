/**
 * Returns a boolean value for id you are running in an isolated virtual machine.
 */
export default function ivm() {
  return !!Game.cpu.getHeapStatistics
}
