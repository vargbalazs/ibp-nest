/*
T = database entity (like User class)
T2 = createDto class
T3 = updateDto class
 */
export interface IBaseRepository<T, T2, T3> {
  findAll(): Promise<T[]>;
  findById(id: number): Promise<T | undefined>;
  createEntity(createDto: T2): Promise<T>;
  updateEntity(id: number, updateDto: T3): Promise<T | undefined>;
  deleteEntity(id: number): Promise<boolean>;
}
