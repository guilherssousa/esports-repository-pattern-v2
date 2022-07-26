import { Request, Response } from "express";
import { ListPlayersService } from "./ListPlayersService";

export class ListPlayersController {
  constructor(private listPlayersService: ListPlayersService) {}

  async handle(req: Request, res: Response) {
    try {
      const { limit } = req.params;

      const players = await this.listPlayersService.execute({
        limit: limit ? parseInt(limit) : 20,
      });

      return res.json(players);
    } catch (e) {
      return res.json({
        message: e.message,
      });
    }
  }
}
