import { IResponse } from "../entities";
import IApi from "./IApi";
import http from "./http-common";

export default class Api implements IApi {
  public async getRepositories(searchText: string, page: number): Promise<IResponse<any[]>> {
    const response = await http.get(`/search/repositories?q=${searchText || 'react'}&page=${page}&per_page=20`);

    return {
      status: response.status,
      data: response.data?.items,
      msg: response.statusText,
      totalCount: response.data?.total_count,
    };
  }
}