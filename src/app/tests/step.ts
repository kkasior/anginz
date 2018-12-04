import { Iaction } from "./action";

export interface Istep {
    testId: number;
    actions: Iaction[];
}