import { Languages } from '../Languages';

export const recruitData = {
  [Languages.KO]: {
    recruit: '지원하기',
    conditions: '근무조건',
    conditions_detail: {
      salary: '급여',
      workDuration: '근무기간',
      workDays: '근무요일',
      workHours: '근무시간',
      employerName: '대표',
      companyName: '회사명',
      workType: '고용형태',
    },
    eligibilityRequirements: '지원자격',
    detailedDescription: '상세설명',
    mainResponsibilities: '주요업무',
    PreferredRequirements: '우대사항',
  },
  [Languages.VE]: {
    recruit: 'Ứng tuyển',
    conditions: 'Điều kiện làm việc',
    conditions_detail: {
      salary: 'Lương',
      workDuration: 'Thời gian làm việc',
      workDays: 'Ngày làm việc',
      workHours: 'Giờ làm việc',
      employerName: 'Người đại diện',
      companyName: 'Tên công ty',
      workType: 'Loại hình công việc',
    },
    eligibilityRequirements: 'Yêu cầu ứng tuyển',
    detailedDescription: 'Mô tả chi tiết',
    mainResponsibilities: 'Nhiệm vụ chính',
    PreferredRequirements: 'Yêu cầu ưu tiên',
  },
};
