export enum NotificationStatus{
    SENT= "SENT",
    PENDING= "PENDING",
    FAILED = "FAILED"
}

export class Notification {
    constructor(public id: string, public email: string,public price: number,public dailyChange: number, public volume: number , public status: NotificationStatus.PENDING) {

    }
}