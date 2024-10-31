export const AUTH = {
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  LOADING: '/loading',
} as const;

export const APPLY = {
  GUIDE: '/applyguide',
  APPLYPAGE: '/apply',
};

export const MY_PAGE = {
  EMPLOYER: '/employer-my-page',
};

export const EMPLOYEE = {
  EMPLOYEE_PAGE: '/employee-my-page',
} as const;

export const CONTRACT = {
  EMPLOYER: '/employer-contract',
  EMPLOYEE: '/employee-contract',
} as const;

const ROUTE_PATH = {
  HOME: '/',
  RECRUIT: '/recruit/:postId',
  POST_NOTICE: '/post-notice',
  APPLY,
  AUTH,
  APPLICANTS: '/company/:companyId/recruitment/:recruitmentId/applicants',
  EMPLOYEE,
  RESUME: '/resume',
  MY_COMPANY: '/my-company/:companyId',
  REGISTER_VISA: '/register-visa',
  MY_PAGE,
  REGISTERSIGN: '/registersign',
  REGISTERCOMPANY: '/register-company',
  CONTRACT,
} as const;

export default ROUTE_PATH;
