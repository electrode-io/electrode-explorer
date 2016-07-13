const mockFetchBuilder = function (mocks) {
  return function () {
    return function (next) {
      return function (action) {
        if (action.type === "EFFECT_FETCH") {
          const mock = mocks.find((m) => m.regex.test(action.payload.url) && (m.method === action.payload.params.method || m.method === undefined ));
          if (mock) {
            return new Promise((resolve) => {
              setTimeout(() => resolve(mock.res(action.payload, mock.regex.exec(action.payload.url))),
                mock.sleep || 1000
              );
            });
          }
        }
        next(action);
      };
    };
  }
};
export default mockFetchBuilder;
