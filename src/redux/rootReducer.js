import { combineReducers } from "redux";
import usersReducer from "./Users/usersReducer";
import userReducer from "./SetUsers/setUserReducer";

const rootReducer = combineReducers({
    users: usersReducer,
    user: userReducer
})

export default rootReducer