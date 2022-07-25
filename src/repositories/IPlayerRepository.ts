import { IBaseRepository } from "./IBaseRepository";
import { Player } from "../entities/Player";

export interface IPlayerRepository extends IBaseRepository<Player> {}
