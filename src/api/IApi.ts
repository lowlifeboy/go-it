import { IResponse } from "../entities";

export default interface IApi {
  getRepositories(searchText: string, page: number): Promise<IResponse<any[]>>;
}