import * as actionTypes from './actionTypes';

export function taskCompleted(id) {
  return {
    type: actionTypes.taskUpdated,
    payload: { id, completed: true },
  };
}

export function taskDelete(id) {
  return {
    type: actionTypes.taskDeleted,
    payload: { id, title: `delete task - ${id}` },
  };
}

export function titleChanged(id) {
  return {
    type: actionTypes.taskUpdated,
    payload: { id, title: `New title for ${id}` },
  };
}
