/** @format */

import client from "./client";

const REVIEWS = "/reviews";
const REVIEWRESPONSES = "/response/21";

const getReviews = () => client.get(REVIEWS);

const postResponses = (response) => {
  return client.post(REVIEWRESPONSES, { ResponseText: response });
};

export default {
  getReviews,
  postResponses,
};
