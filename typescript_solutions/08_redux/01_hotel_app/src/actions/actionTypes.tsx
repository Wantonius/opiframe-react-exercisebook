import HotelInfo from '../models/HotelInfo';

export interface HotelAction {
	type:string;
	error:string;
	list:HotelInfo[];
}

export type DispatchType = (args:HotelAction) => HotelAction