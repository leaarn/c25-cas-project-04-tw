import type { Request, Response } from "express";
import { logger } from "../utils/logger";
import { DiscoverService } from "../services/discoverService";

export class DiscoverController {
  constructor(private discoverService: DiscoverService) {}

//   getUserInfo = async (req: Request, res: Response) => {
//     try {
//       const userId = req.user_id!;
//       const userInfo = await this.discoverService.getUserInfo(userId);
//       res.status(200).json(userInfo);
//     } catch (error) {
//       logger.error(error);
//       res.status(500).json({ error: "Internal server error" });
//     }
//   };

  getAllProfile = async (_req: Request, res: Response) => {
    try {
      const allProfile = await this.discoverService.getAllProfile();
      res.status(200).json(allProfile);
    } catch (error) {
      logger.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  };

  getAllUsers = async (_req: Request, res: Response) => {
    try {
      const allUserProfile = await this.discoverService.getAllUsers();
      res.status(200).json(allUserProfile);
    } catch (error) {
      logger.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  };

  getAllPT = async (_req: Request, res: Response) => {
    try {
      const allPTProfile = await this.discoverService.getAllPT();
      res.status(200).json(allPTProfile);
    } catch (error) {
      logger.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
}