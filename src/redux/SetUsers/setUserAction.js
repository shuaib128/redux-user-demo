import { USER } from "./setUserType";

export const getUser = (data) => {
    return {
        type: USER,
        payload: data
    }
}