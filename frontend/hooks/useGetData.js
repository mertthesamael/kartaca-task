import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetData = (collection, id) => {
  try {
    return useQuery(
      ["All docs", collection],
      () =>
        axios.post(`/api/getdata`, {
          collection: collection,
          id: id,
        }),
      {
        select: (data) => data.data.data,
      }
    );
  } catch (err) {
    return false;
  }
};
