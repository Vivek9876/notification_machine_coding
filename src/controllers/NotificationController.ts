import { Request, Response } from "express";
import { NotificationService } from "../services/NotificationService";

export class NotificationController {
  constructor(private notificationService: NotificationService) {}

  createNotification = (req: Request, res: Response): void => {
    const { email, price, dailyChange, volume } = req.body;
    const id = this.notificationService.creteNotification(email, price, dailyChange, volume);
    res.status(201).json({ id });
  };

  listNotifications = (req: Request, res: Response): void => {
    const notifications = this.notificationService.listNotifications();
    res.status(200).json(notifications);
  };

  getNotificationById = (req: Request, res: Response) => {
    const {id} = req.params;
    const notification = this.notificationService.getNotificationById(id)
    res.status(200).json(notification);
  }
}