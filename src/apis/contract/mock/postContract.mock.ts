import { http, HttpResponse } from 'msw';
import { getPostContractPath } from '../hooks/usePostContract';

export const contractsMockHandler = [
  http.post(getPostContractPath(), async ({ request }) => {
    const req = await request.json();
    return HttpResponse.json(req, { status: 201 });
  }),
];
