import { Result } from "./result";

export interface BeerResponse {
    ok: boolean;
    data?: Result[];
    message?: string;
}