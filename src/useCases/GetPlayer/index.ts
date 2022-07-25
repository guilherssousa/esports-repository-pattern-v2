import { inMemoryPlayerRepository } from "../../repositories/implementations/InMemoryPlayerRepository";
import { GetPlayerController } from "./GetPlayerController";
import { GetPlayerService } from "./GetPlayerService";

const getPlayerService = new GetPlayerService(inMemoryPlayerRepository);

const getPlayerController = new GetPlayerController(getPlayerService);

export { getPlayerController };
