import { Request, Response } from "express";
import { CreatePlayerService } from "./CreatePlayerService";

export class CreatePlayerController {
  constructor(private createPlayerService: CreatePlayerService) {}

  async handle(req: Request, res: Response) {
    console.log(`[CreatePlayerController] handle()`);

    try {
      const { name, nationality, full_name } = req.body;

      const validationConditions = [
        name.length > 4,
        nationality.length == 2,
        full_name.length > 4,
        full_name.split(" ").length >= 2,
      ];

      if (!validationConditions.every(Boolean)) {
        throw new Error("Invalid player data. Check your request body.");
      }

      const fullName = full_name
        .split(" ")
        .map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");

      const player = await this.createPlayerService.execute({
        name,
        full_name: fullName,
        nationality: nationality.toUpperCase(),
      });

      return res.json(player);
    } catch (e) {
      return res.json({
        message: e.message,
      });
    }
  }
}
