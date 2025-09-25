import { DataProvider } from '@refinedev/core';
import { api } from './axios';

export const dataProvider: DataProvider = {
  getList: async ({ resource, pagination, filters, sorters }) => {
    const params: any = {};
    if (pagination) {
      params.page = pagination.current ?? 1;
      params.perPage = pagination.pageSize ?? 10;
    }
    if (sorters?.length) {
      const s = sorters[0];
      params.sort = s.field;
      params.order = s.order === 'asc' ? 'ASC' : 'DESC';
    }
    if (filters?.length) {
      params.filter = {};
      for (const f of filters) {
        params.filter[f.field] = f.value; // در بک‌اند تبدیل کنید
      }
    }
    const { data } = await api.get(`/${resource}`, { params });
    return { data: data.items ?? data, total: data.total ?? data.length };
  },
  getOne: async ({ resource, id }) => {
    const { data } = await api.get(`/${resource}/${id}`);
    return { data };
  },
  create: async ({ resource, variables }) => {
    const { data } = await api.post(`/${resource}`, variables);
    return { data };
  },
  update: async ({ resource, id, variables }) => {
    const { data } = await api.patch(`/${resource}/${id}`, variables);
    return { data };
  },
  deleteOne: async ({ resource, id }) => {
    const { data } = await api.delete(`/${resource}/${id}`);
    return { data };
  },
};
