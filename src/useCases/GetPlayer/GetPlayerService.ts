import { IPlayerRepository } from "../../repositories/IPlayerRepository";
import { IGetPlayerRequestDTO } from "./IGetPlayerRequestDTO";

export class GetPlayerService {
  constructor(private playerRepository: IPlayerRepository) {}
  async execute(data: IGetPlayerRequestDTO) {
    const player = await this.playerRepository.findOne(data.slug);

    return player;
  }
}
