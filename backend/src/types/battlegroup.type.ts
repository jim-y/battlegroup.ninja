import { Player } from "./player.type";

export interface Battlegroup {
  id?: number;
  name: string;
  capacity: number;
  officers: string[] | Player[];
}