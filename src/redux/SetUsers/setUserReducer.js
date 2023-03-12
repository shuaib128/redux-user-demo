import { USER } from "./setUserType";

const initialState = {
    user: {}
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER: return {
            ...state,
            user: action.payload
        }
        default: return state
    }
}

export default userReducer