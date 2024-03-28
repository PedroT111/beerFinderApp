import { Beer } from "./beer";

export interface Result {
    siteName?: string;
    data?: Beer[];
    error?: string;
}