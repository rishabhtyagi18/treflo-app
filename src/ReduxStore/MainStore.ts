import { createStore } from "redux";

import { combinedReducer } from "./reducer";

export const Store = createStore(combinedReducer);
