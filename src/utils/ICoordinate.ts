import { Direction } from "./Direction";

export interface ICoordinate {
	isNull(): boolean;
	getDirection(coordinate: ICoordinate): Direction;
	inHorizontal(coordinate: ICoordinate): boolean;
	inVertical(coordinate: ICoordinate): boolean;
	inMainDiagonal(): boolean;
}
