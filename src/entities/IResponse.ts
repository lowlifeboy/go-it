export default interface IResponse<T> {
  status: any;
  data?: T;
  error?: number;
  msg?: string;
  totalCount?: number;
}