import { createStoreHook } from "react-redux";
import cakeReducer from './Cakes/cakeReducer'

const store = createStoreHook(cakeReducer)


export default store;
