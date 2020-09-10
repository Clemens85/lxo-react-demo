import {createAction} from "@reduxjs/toolkit";
import {User} from "../../../shared/user/UserService";

export const selectUser = createAction<User>('selectUser');