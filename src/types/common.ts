export type IMeta = {
  limit: number;
  page: number;
  size: number;
};

export type ResponseSuccessType = {
  data: any;
  meta: IMeta;
};
