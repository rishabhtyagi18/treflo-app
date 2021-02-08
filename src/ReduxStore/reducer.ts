import * as ActionTypes from "./ActionTypes";

const initialState = {
	data: null,
	cart: [],
	sortby: null,
	filterby: null,
	totalCost: 0,
	totalItems: 0,
};

interface IState {
	cart: any[];
}

const calcTotal = (data: any[]) => {
	let res = 0;

	for (let i in data) {
		res += data[i].price * data[i].count;
	}
	return res;
};

const numerateItems = (data: any[]) => {
	let res = 0;

	for (let i in data) {
		res += data[i].count;
	}

	return res;
};

const handleUpdate = (id: number, item: any, cart: any[]) => {
	let ind = cart.findIndex((i) => i.id === id);
	if (item.count === 0) {
		cart.splice(ind, 1);
	} else {
		cart[ind] = item;
	}

	return cart;
};

const MainReducer = (
	state: IState = initialState,
	action: { type: String; payload: any }
) => {
	switch (action.type) {
		case ActionTypes.POPULATE_MENU:
			return { ...state, data: action.payload };

		case ActionTypes.ADDTO_CART: {
			const { count } = action.payload;
			if (count > 0) {
				let temp = state.cart.concat(action.payload);
				let newTotal = calcTotal(temp);
				let numItems = numerateItems(temp);
				return {
					...state,
					cart: temp,
					totalCost: newTotal,
					totalItems: numItems,
				};
			}

			return state;
		}

		case ActionTypes.REMOVE_FROM_CART: {
			let temp = state.cart.filter((pza) => pza.id !== action.payload);
			let newTotal = calcTotal(temp);
			let numItems = numerateItems(temp);
			return {
				...state,
				cart: temp,
				totalCost: newTotal,
				totalItems: numItems,
			};
		}

		case ActionTypes.UPDATE_CART_ITEM: {
			let newData = handleUpdate(
				action.payload.id,
				action.payload.data,
				state.cart
			);
			let newTotal = calcTotal(state.cart);
			let numItems = numerateItems(state.cart);
			return {
				...state,
				data: { ...newData },
				totalCost: newTotal,
				totalItems: numItems,
			};
		}

		case ActionTypes.UPDATE_FILTER:
			return { ...state, filterby: action.payload };

		case ActionTypes.UPDATE_SORTING:
			return { ...state, sortby: action.payload };

		default:
			return state;
	}
};

export const combinedReducer = MainReducer;
