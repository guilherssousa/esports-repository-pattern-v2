export interface IBaseFilters {
  limit?: number;
}

export interface IBaseRepository<T> {
  create(data: Omit<T, "id">): Promise<T>;
  findAll(filters: IBaseFilters): Promise<T[]>;
  findOne(slug: string): Promise<T>;
  delete(slug: string): Promise<void>;
  update(slug: string, data: Partial<T>): Promise<T>;
}
