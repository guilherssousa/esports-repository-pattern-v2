import { Request, Response } from "express";
import { GetPlayerService } from "./GetPlayerService";

export class GetPlayerController {
  constructor(private getPlayerService: GetPlayerService) {}

  async handle(req: Request, res: Response) {
    try {
      const { slug } = req.params;

      const player = await this.getPlayerService.execute({
        slug: slug as string,
      });

      return res.json(player);
    } catch (e) {
      return res.json({
        message: e.message,
      });
    }
  }
}
