import { useQuery } from "@tanstack/react-query";
import axios from "axios";

//Custom hook for fetching spesific data from backend
export const useGetData = (collection, id) => {
  try {
    return useQuery(
      ["All docs", collection],
      () =>
        axios.post(`/api/getdata`, {
          collection: collection,
          id: id,
          endpoint: "/get_spesific",
        }),
      {
        select: (data) => data.data.data,
      }
    );
  } catch (err) {
    return false;
  }
};
