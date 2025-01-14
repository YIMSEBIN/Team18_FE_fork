import { APIPath } from '@/apis/apiPath';
import { recruitmentList } from '@/pages/myCompanyPage/MyCompany.mock';
import { http, HttpResponse } from 'msw';

export const myRecruitmentsMockHandler = [
  http.get(APIPath.getMyRecruitments, () => HttpResponse.json(recruitmentList)),
];
