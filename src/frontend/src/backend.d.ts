import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface WholesaleInquiry {
    city: string;
    monthlyOrderQuantity: string;
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    productInterest: string;
    companyName: string;
    phone: string;
}
export type Time = bigint;
export interface ContactInquiry {
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    phone: string;
}
export interface backendInterface {
    getAllContactInquiries(): Promise<Array<ContactInquiry>>;
    getAllWholesaleInquiries(): Promise<Array<WholesaleInquiry>>;
    getContactInquiry(timestamp: Time): Promise<ContactInquiry>;
    getWholesaleInquiry(timestamp: Time): Promise<WholesaleInquiry>;
    submitContactInquiry(name: string, email: string, phone: string, message: string): Promise<void>;
    submitWholesaleInquiry(name: string, companyName: string, city: string, phone: string, email: string, productInterest: string, monthlyOrderQuantity: string, message: string): Promise<void>;
}
