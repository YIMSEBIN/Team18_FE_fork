import { APIPath } from '@/apis/apiPath';
import { http, HttpResponse } from 'msw';

export const visaMockHandler = [
  http.put(APIPath.setVisa, async ({ request }) => {
    const req = await request.json();
    return HttpResponse.json(req, { status: 200 });
  }),
];