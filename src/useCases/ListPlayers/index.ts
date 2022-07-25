import { inMemoryPlayerRepository } from "../../repositories/implementations/InMemoryPlayerRepository";
import { ListPlayersService } from "./ListPlayersService";
import { ListPlayersController } from "./ListPlayersController";

const listPlayersService = new ListPlayersService(inMemoryPlayerRepository);

const listPlayersController = new ListPlayersController(listPlayersService);

export { listPlayersController };
