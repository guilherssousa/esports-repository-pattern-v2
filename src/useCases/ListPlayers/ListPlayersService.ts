import { IPlayerRepository } from "../../repositories/IPlayerRepository";
import { IListPlayersRequestDTO } from "./IListPlayersRequestDTO";

export class ListPlayersService {
  constructor(private playerRepository: IPlayerRepository) {}

  async execute(data: IListPlayersRequestDTO) {
    const players = await this.playerRepository.findAll(data);
    return players;
  }
}
