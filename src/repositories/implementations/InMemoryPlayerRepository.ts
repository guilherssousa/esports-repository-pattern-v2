import { IBaseFilters } from "../IBaseRepository";
import { IPlayerRepository } from "../IPlayerRepository";
import { Player } from "../../entities/Player";

class InMemoryPlayerRepository implements IPlayerRepository {
  private state: Player[] = [];

  async create(player: Player): Promise<Player> {
    this.state.push(player);
    return player;
  }

  async findAll(filters: IBaseFilters): Promise<Player[]> {
    const players = this.state.slice(0, filters.limit);
    return players;
  }

  async findOne(slug: string): Promise<Player> {
    return this.state.find((player) => player.slug === slug);
  }

  async delete(slug: string): Promise<void> {
    this.state = this.state.filter((player) => player.slug !== slug);
  }

  async update(slug: string, player: Player): Promise<Player> {
    const index = this.state.findIndex((p) => p.slug === slug);
    this.state[index] = player;
    return player;
  }
}

export const inMemoryPlayerRepository = new InMemoryPlayerRepository();
