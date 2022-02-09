import { createStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

import reducers from ".";

export const store = createStore(reducers)

export const persistor = persistStore(store)