import * as ActionTypes from "./ActionTypes";

export const populateMenu = (resp: any) => ({
	type: ActionTypes.POPULATE_MENU,
	payload: resp,
});

export const addToCart = (item: any) => ({
	type: ActionTypes.ADDTO_CART,
	payload: item,
});

export const removeFromCart = (id: any) => ({
	type: ActionTypes.REMOVE_FROM_CART,
	payload: id,
});

export const updateCartItem = (id: number, data: any) => ({
	type: ActionTypes.UPDATE_CART_ITEM,
	payload: { id, data: { ...data } },
});

export const updateSorting = (data: String) => ({
	type: ActionTypes.UPDATE_SORTING,
	payload: data,
});

export const updateFilter = (data: boolean) => ({
	type: ActionTypes.UPDATE_FILTER,
	payload: data,
});
