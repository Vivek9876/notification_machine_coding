import { Storage } from "../storage/Storage"
import { EmailService} from "./EmailService"
import { v4 as uuidv4} from "uuid"
import { Notification, NotificationStatus}from "../models/notifications"
export class NotificationService {
    constructor(private storage: Storage, private emailService: EmailService) {
    }

    creteNotification(email: string,price: number,dailyChange: number, volume: number ,) {
        const id = uuidv4();
        const notification = new Notification(id, email, price, dailyChange, volume, NotificationStatus.PENDING)
        this.storage.add(notification)
        this.sendNotification(notification)// if we wnats to send directly while creating
    }

    sendNotification(notification: Notification) : void{
        this.emailService.sendEmail(
            notification.email,
            `Thi is subject with ${notification.price}, ${notification.volume},`,
            `This is good chance to invest`
        )
    }

    listNotifications(): Notification [] {
        return this.storage.getAll()
    }

    getNotificationById(id: string): Notification | undefined {
        return this.storage.getById(id)
    }
}