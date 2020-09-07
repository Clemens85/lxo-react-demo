import axios from 'axios';

export interface User {
  id: number;
  name: string;
  email: string;
  gender: string;
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
