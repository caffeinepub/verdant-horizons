import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactSubmission {
    name: string;
    sender: Principal;
    email: string;
    messageType: MessageType;
    message: string;
}
export enum MessageType {
    other = "other",
    request = "request",
    inquiry = "inquiry",
    feedback = "feedback"
}
export interface backendInterface {
    clearSubmissions(): Promise<void>;
    getAllSubmissions(): Promise<Array<ContactSubmission>>;
    submitContactForm(name: string, email: string, messageType: MessageType, message: string): Promise<void>;
}
