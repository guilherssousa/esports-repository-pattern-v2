import { Router } from "express";

import { createPlayerController } from "./useCases/CreatePlayer";
import { listPlayersController } from "./useCases/ListPlayers";

const router = Router();

router.get("/", (req, res) => {
  return res.json({
    message: "API v.2",
    status: "OK",
  });
});

router.get("/players", (req, res) => {
  return listPlayersController.handle(req, res);
});

router.post("/players", (req, res) => {
  return createPlayerController.handle(req, res);
});

export { router };
