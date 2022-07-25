import { inMemoryPlayerRepository } from "../../repositories/implementations/InMemoryPlayerRepository";
import { DeletePlayerService } from "./DeletePlayerService";
import { DeletePlayerController } from "./DeletePlayerController";

const deletePlayerService = new DeletePlayerService(inMemoryPlayerRepository);

const deletePlayerController = new DeletePlayerController(deletePlayerService);

export { deletePlayerController };
