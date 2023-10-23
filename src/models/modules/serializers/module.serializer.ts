import { Module } from '../interfaces/module.interface';

export class ModuleEntity implements Module {
  constructor(partial: Partial<ModuleEntity>) {
    Object.assign(this, partial);
  }

  id: number;
  name: string;
}
