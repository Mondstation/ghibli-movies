import { useState } from "react";
import { getMovies, getMovieByTitle } from "./Requests";

export default function useApi(title) {
  const [data, setData] = useState();

  const makeApiCall = (apiCall, errorCallback) => {
    async function asyncApiCall() {
      try {
        setData(await apiCall());
      } catch (error) {
        if (errorCallback) errorCallback(error);
        else console.error(error);
      }
    }

    asyncApiCall();
  };

  if (title === undefined) {
    return [
      data,
      (errorCallback) => makeApiCall(() => getMovies(), errorCallback),
    ];
  }

  return [
    data,
    (errorCallback) => makeApiCall(() => getMovieByTitle(title), errorCallback),
  ];
}
