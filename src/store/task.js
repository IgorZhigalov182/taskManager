import { createAction, createSlice } from '@reduxjs/toolkit';
import todosService from '../services/todos.service';

const initialState = [];

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    recived(state, action) {
      return action.payload;
    },
    update(state, action) {
      const elementIndex = state.findIndex((el) => el.id === action.payload.id);
      state[elementIndex] = {
        ...state[elementIndex],
        ...action.payload,
      };
    },
    remove(state, action) {
      return state.filter((el) => el.id !== action.payload.id);
    },
  },
});

const { actions, reducer: taskReducer } = taskSlice;
const { update, remove, recived } = actions;
const taskRequested = createAction('task/requested');
const taskRequestedFailed = createAction('task/requestedFailed');

export const getTask = () => async (dispatch) => {
  dispatch(taskRequested());
  try {
    const data = await todosService.fetch();
    dispatch(recived(data));
    console.log(data);
  } catch (error) {
    dispatch(taskRequestedFailed(error.message));
  }
};

export const completeTask = (id) => (dispatch, getState) => {
  dispatch(update({ id, completed: true }));
};

export function titleChanged(id) {
  return update({ id, title: `New title for ${id}` });
}

export function taskDelete(id) {
  return remove({ id });
}

export default taskReducer;
