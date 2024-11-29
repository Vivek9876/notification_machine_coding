import express from "express";
import bodyParser from "body-parser";
import { NotificationController } from "./controllers/NotificationController";
import { NotificationService } from "./services/NotificationService";
import { EmailService } from "./services/EmailService";
import { Storage } from "./storage/Storage";

const app = express();
app.use(bodyParser.json());

const storage = new Storage();
const emailService = new EmailService();
const notificationService = new NotificationService(storage, emailService);
const notificationController = new NotificationController(notificationService);

app.post("/notifications", notificationController.createNotification);
app.get("/notifications", notificationController.listNotifications);
app.get("/notifications/:id", notificationController.getNotificationById)


const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));