import { Languages } from '../Languages';

export const EmployerMyPageData = {
  [Languages.KO]: {
    GREETING: '사장님, 안녕하세요!',
    REGISTER_SIGN: '사인 등록',
    MY_COMPANIES: '내 회사',
    TOTAL_COMPANIES: (count: number) => `총 ${count} 곳`,
    COMPANY_INFO: '회사 정보',
  },
  [Languages.VE]: {
    GREETING: 'Chủ doanh nghiệp, xin chào!',
    REGISTER_SIGN: 'Đăng ký chữ ký',
    MY_COMPANIES: 'Công ty của tôi',
    TOTAL_COMPANIES: (count: number) => `Tổng cộng ${count} công ty`,
    COMPANY_INFO: 'Thông tin công ty',
  },
};
