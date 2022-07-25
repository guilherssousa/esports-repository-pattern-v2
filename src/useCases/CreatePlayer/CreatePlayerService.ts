import { Player } from "../../entities/Player";
import { IPlayerRepository } from "../../repositories/IPlayerRepository";
import { ICreatePlayerRequestDTO } from "./ICreatePlayerRequestDTO";

export class CreatePlayerService {
  constructor(private playerRepository: IPlayerRepository) {}
  async execute(data: ICreatePlayerRequestDTO) {
    const player = new Player(data);

    const playerAlreadyExists = await this.playerRepository.findOne(
      player.slug
    );

    if (playerAlreadyExists) {
      throw new Error(`Player with slug '${player.slug}' already exists`);
    }

    return await this.playerRepository.create(player);
  }
}
