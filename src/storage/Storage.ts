import {Notification} from "../models/notifications"

export class Storage {
    private notifications: Map<string, Notification> = new Map()

    add(notification: Notification): void {
        this.notifications.set(notification.id, notification)
    }

    getAll(): Notification[] {
        return Array.from(this.notifications.values())
    }

    getById(id: string): Notification | undefined {
        return this.notifications.get(id)
    }

}