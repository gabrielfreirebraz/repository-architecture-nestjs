
/* Entity: generic type */
export default interface Repository<Entity> {
  create: (data: Entity) => Promise<Entity>
}