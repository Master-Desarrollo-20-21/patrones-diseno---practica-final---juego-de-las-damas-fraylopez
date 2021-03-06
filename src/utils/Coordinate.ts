import { Direction } from "./Direction";

export interface Coordinate {
	isNull(): boolean;
	getDirection(coordinate: Coordinate): Direction;
	inHorizontal(coordinate: Coordinate): boolean;
	inVertical(coordinate: Coordinate): boolean;
	inMainDiagonal(): boolean;
}
