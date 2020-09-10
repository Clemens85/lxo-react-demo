import axios, {AxiosResponse} from 'axios';
import {getRandomInt, isStringEmpty} from "../Utils";
import {IssueList} from "../issues/IssueList";

export interface UserAttributes {
  name: string;
  email: string;
  gender: string;
}

export interface User extends UserAttributes {
  id: number;
  status: string;
}

export interface Todo {
  id: number;
  user_id: number;
  title: string;
  completed: boolean;
  created_at: string;
  updated_at: string;
}

export interface UserWithTodos {
  /** The user **/
  user: User;
  /** The userId (for convenience reasons) **/
  id: number
  /** The TODOs of this user (can be null) **/
  todos?: Todo[];
}

// API returns a response like so:
// { meta: xxx, data: [ {user1}, {user2}, ...] }

export const findUsersAsync = async(limit?: number): Promise<User[]> => {
  const response = await axios.get(`https://gorest.co.in/public-api/users`);
  const resultBody = response.data;
  const maxSize = limit ? limit : resultBody.data.length;
  return resultBody.data.slice(0, maxSize);
};

export const findTodosOfUserAsync = async(userId: number): Promise<Todo[]> => {
  const response = await axios.get(`https://gorest.co.in/public-api/users/${userId}/todos`);
  const resultBody = response.data;
  if (!resultBody || !resultBody.data || resultBody.data.length === 0) {
    return [];
  }
  return resultBody.data;
};

export const createUserAsync = async(user: UserAttributes): Promise<User> => {
  // Mock backend request
  const userToSave = { ...user, id: getRandomInt(10000), status: 'mocked' };
  if (isStringEmpty(userToSave.name)) {
    return Promise.reject(newMocked406Response('name', 'Name is required'));
  }
  if (isStringEmpty(userToSave.email)) {
    return Promise.reject(newMocked406Response('email', 'Email is required'));
  }
  if (userToSave.email === 'foo@bar.de') {
    return Promise.reject(newMocked406Response('email', 'Email already exists (backend check)'));
  }
  return Promise.resolve(userToSave);
};

export function newEmptyUserAttributes(): UserAttributes {
  return {
    name: '',
    email: '',
    gender: 'Female'
  };
}


function newMocked406Response(source: string, message: string): AxiosResponse {

  const mockedResponse: AxiosResponse = {
    status: 406,
    statusText: "406",
    data: newIssueList(source, message),
    headers: [],
    config: {}
  };
  return mockedResponse;
}

function newIssueList(source: string, message: string) : IssueList {
  return {
    issues: [
      {
        source: source,
        i18nKey: message
      }
    ]
  };
}

