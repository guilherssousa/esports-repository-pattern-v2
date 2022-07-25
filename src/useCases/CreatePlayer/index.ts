import { inMemoryPlayerRepository } from "../../repositories/implementations/InMemoryPlayerRepository";
import { CreatePlayerService } from "./CreatePlayerService";
import { CreatePlayerController } from "./CreatePlayerController";

const createPlayerService = new CreatePlayerService(inMemoryPlayerRepository);

const createPlayerController = new CreatePlayerController(createPlayerService);

export { createPlayerController };
