export const buildQueryString = (queryInputParams: {
  [key: string]: any;
}): string => {
  const queryParams = Object.entries(queryInputParams).reduce(
    (
      acc: {
        [key: string]: any;
      },
      currVal
    ) => {
      if (currVal[1]) {
        acc[currVal[0]] = currVal[1];
      }

      return acc;
    },
    {}
  );

  const queryString = new URLSearchParams(queryParams).toString();

  return queryString;
};
