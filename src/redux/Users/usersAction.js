import { GET_USERS } from "./usersTypes";

export const getUsers = (data) => {
    return {
        type: GET_USERS,
        payload: data
    }
}