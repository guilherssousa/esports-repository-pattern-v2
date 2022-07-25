import { IPlayerRepository } from "../../repositories/IPlayerRepository";
import { IDeletePlayerRequestDTO } from "./IDeletePlayerRequestDTO";

export class DeletePlayerService {
  constructor(private playerRepository: IPlayerRepository) {}

  async execute(data: IDeletePlayerRequestDTO) {
    const player = await this.playerRepository.findOne(data.slug);

    if (!player) {
      throw new Error("Player not found");
    }

    await this.playerRepository.delete(player.slug);
  }
}
