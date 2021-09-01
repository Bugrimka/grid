import {UserList} from "../Mocks/UserList";

export const getCurrentUser = (userId) => {
    return UserList.find(person => person.id === userId)
}