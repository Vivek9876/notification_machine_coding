export class EmailService {
    sendEmail(to: string, subject: string, text: string): void {
        console.log(`notification sent ${to}, with subject ${subject}`)
    }
}