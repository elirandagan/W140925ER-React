import axios from "axios";
import { type GetQuoteResponse } from "../models/get-quote-response";
import type { PostRequest } from "../models/post-request";
import type { PostResponse } from "../models/post-response";

const _axios = axios.create({
  //   baseURL: "http://api.quotable.io",
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Authorization:
    //   "Bearer slkdfghjsdlkfghjdljfghs;dlfjghs;dljfhgsdljkfhgsd;kjfhgsdkl;jfgh",
  },
});

export const ApiService = {
  getRandomQuote: () => _axios.get<GetQuoteResponse>("random"),
  createPost: (newPost: PostRequest) =>
    _axios.post<PostResponse>("posts", newPost, {
      // headers: {
      //   Authorization:
      //     "Bearer slkdfghjsdlkfghjdljfghs;dlfjghs;dljfhgsdljkfhgsd;kjfhgsdkl;jfgh",
      // },
    }),
};
