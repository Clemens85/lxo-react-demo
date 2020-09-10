import {User} from "../../../shared/user/UserService";
import {createReducer, PayloadAction} from "@reduxjs/toolkit";

interface UsersState {
  selectedUser: User | null;
}
const initialState: UsersState = {
  selectedUser: null
};

const userReducers = createReducer(initialState, {
  selectUser: (state: UsersState, {payload}: PayloadAction<User>) => {
    state.selectedUser = payload;
  }
});
export default userReducers;