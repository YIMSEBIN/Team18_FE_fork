import { Languages } from '../Languages';

export const applicantsData = {
  [Languages.KO]: {
    APPLICANT_LIST: '지원자 목록',
    TOTAL_APPLICANTS: (count: number) => `총 ${count}명`,
    VIEW_DETAILS: '자세히 보러가기',
    TABLE_HEADERS: {
      NAME: '이름',
      NATION: '국적',
      KOREAN_LANGUAGE_LEVEL: '한국어 실력',
    },
    BUTTONS: {
      VIEW_RESUME: '지원서',
      CREATE_CONTRACT: '계약하기',
    },
  },
  [Languages.VE]: {
    APPLICANT_LIST: 'Danh sách ứng viên',
    TOTAL_APPLICANTS: (count: number) => `Tổng cộng ${count} người`,
    VIEW_DETAILS: 'Xem chi tiết',
    TABLE_HEADERS: {
      NAME: 'Tên',
      NATION: 'Quốc tịch',
      KOREAN_LANGUAGE_LEVEL: 'Trình độ tiếng Hàn',
    },
    BUTTONS: {
      VIEW_RESUME: 'Hồ sơ ứng tuyển',
      CREATE_CONTRACT: 'Ký hợp đồng',
    },
  },
};
