import { Router } from "express";

import { createPlayerController } from "./useCases/CreatePlayer";
import { getPlayerController } from "./useCases/GetPlayer";
import { listPlayersController } from "./useCases/ListPlayers";
import { deletePlayerController } from "./useCases/DeletePlayer";

const router = Router();

router.get("/", (req, res) => {
  return res.json({
    message: "API v.2",
    status: "OK",
  });
});

/* Player Endpoints */

router.get("/players", (req, res) => {
  return listPlayersController.handle(req, res);
});

router.get("/players/:slug", (req, res) => {
  return getPlayerController.handle(req, res);
});

router.post("/players", (req, res) => {
  return createPlayerController.handle(req, res);
});

router.delete("/players/:slug", (req, res) => {
  return deletePlayerController.handle(req, res);
});

export { router };
