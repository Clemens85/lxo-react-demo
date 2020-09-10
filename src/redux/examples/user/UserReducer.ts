import {User} from "../../../shared/user/UserService";
import {createReducer, PayloadAction} from "@reduxjs/toolkit";
import { selectUser } from './Actions';


interface UsersState {
  selectedUser: User | null;
}
const initialState: UsersState = {
  selectedUser: null
};

const userReducers = createReducer(initialState, {
  [selectUser.type]: (state: UsersState, {payload}: PayloadAction<User>) => {
    state.selectedUser = payload;
  }
});
export default userReducers;