import { Languages } from '../Languages';

export const resumeData = {
  [Languages.KO]: {
    title: '이력서 작성',
    name: '이름',
    address: '주소',
    phoneNumber: '번호',
    career: '경력',
    introduction: '자기소개',
    koreanLevel: '한국어 실력',
    koreanLevel_1: '초급',
    koreanLevel_2: '중급',
    koreanLevel_3: '고급',
    ResumeDescription: {
      name: '이름을 입력하세요.',
      address: '주소를 입력하세요.',
      phoneNumber: '010-0000-0000 형식의 번호를 입력하세요.',
      phoneNumberError: '올바른 전화번호 형식이 아닙니다. (예: 010-0000-0000)',
      career: '경력을 입력하세요.',
      introduction: '자기소개를 입력하세요.',
      koreanLevel: '한국어 실력을 선택해주세요!',
    },
    errors: '을(를) 입력해주세요!',
    submit: '제출하기',
    btnSubmit: '정말 제출하시겠습니까?',
  },
  [Languages.VE]: {
    title: 'Viết sơ yếu lý lịch',
    name: 'Tên',
    address: 'Địa chỉ',
    phoneNumber: 'Số điện thoại',
    career: 'Kinh nghiệm',
    introduction: 'Giới thiệu bản thân',
    koreanLevel: 'Trình độ tiếng Hàn',
    koreanLevel_1: 'Sơ cấp',
    koreanLevel_2: 'Trung cấp',
    koreanLevel_3: 'Cao cấp',
    ResumeDescription: {
      name: 'Vui lòng nhập tên.',
      address: 'Vui lòng nhập địa chỉ.',
      phoneNumber: 'Vui lòng nhập số theo định dạng 010-0000-0000.',
      phoneNumberError: 'Số điện thoại không đúng định dạng. (Ví dụ: 010-0000-0000)',
      career: 'Vui lòng nhập kinh nghiệm.',
      introduction: 'Vui lòng nhập giới thiệu bản thân.',
      koreanLevel: 'Vui lòng chọn trình độ tiếng Hàn!',
    },
    errors: 'Vui lòng nhập ',
    submit: 'Nộp',
    btnSubmit: 'Bạn có chắc muốn nộp không?',
  },
};
