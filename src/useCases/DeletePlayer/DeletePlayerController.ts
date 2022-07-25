import { Request, Response } from "express";
import { DeletePlayerService } from "./DeletePlayerService";

export class DeletePlayerController {
  constructor(private deletePlayerService: DeletePlayerService) {}

  async handle(req: Request, res: Response) {
    console.log(`[DeletePlayerController] handle()`);

    try {
      const { slug } = req.params;

      const player = await this.deletePlayerService.execute({
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
