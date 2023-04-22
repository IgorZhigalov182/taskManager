import httpService from './http.service';
const todosEndepoint = 'todos/';
const todosService = {
  fetch: async () => {
    const { data } = await httpService.get(todosEndepoint, {
      params: {
        _page: 1,
        _limit: 10,
      },
    });
    return data;
  },
  getOneTask: async () => {
    const { data } = await httpService.post(todosEndepoint, {
      body: {
        title: `NewTask`,
        completed: false,
        id: 21,
      },
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return data;
  },
};
export default todosService;
