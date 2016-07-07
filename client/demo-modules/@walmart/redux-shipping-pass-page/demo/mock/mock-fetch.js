const mockFetchBuilder = function (mocks) {
  return function () {
    return function (next) {
      return function (action) {
        if (action.type === "EFFECT_FETCH") {
          console.log(action)
          const mock = mocks.find((m) => m.regex.test(action.payload.url) && (m.method === action.payload.params.method || m.method === undefined ));
          if (mock) {
            try {
              return Promise.resolve(mock.res(action.payload, mock.regex.exec(action.payload.url)));
            } catch (e) {
              return Promise.reject(e);
            }
          }
        }
        next(action);
      };
    };
  }
};
export default mockFetchBuilder;
