import { Languages } from '../Languages';

export const contractData = {
  [Languages.KO]: {
    CONTRACT: '근 로 계 약 서',
    WORKING_PLACE: '1. 근무장소',
    RESPONSIBILITIES: '2. 업무내용',
    WORKING_HOURS: '3. 근로일 및 근로일별 근로시간',
    DAY_OFF: '4. 주휴일',
    SALARY: '5. 임금',
    ANNUAL_PAID_LEAVE: '6. 연차유급휴가',
    RULE: '7. 취업규칙',
    SENTENCE1: '사용자와 근로자는 각자가 근로계약, 취업규칙, 단체협약을 지키고 성실하게 이행하여야 한다.',
    SENTENCE2: "이 계약에서 정하지 않은 사항은 '근로기준법'에서 정하는 바에 따른다.",
    SIGN: '서명하기',
    SUBMIT_CHECK: '정말 제출하시겠습니까?',
    SUBMIT: '제출하기',
    ERROR: {
      WORKING_PLACE: '근무장소를 작성해주세요.',
      RESPONSIBILITIES: '상세 업무 내용을 작성해주세요.',
      WORKING_HOURS: '근로일 및 근로일별 근로시간을 작성해주세요.',
      DAY_OFF: '주휴일에 대한 정보를 작성해주세요.',
      SALARY: '임금을 작성해주세요.',
      ANNUAL_PAID_LEAVE: '연차유급휴가에 대한 정보를 작성해주세요.',
      RULE: '취업규칙을 작성해주세요.',
      NUMBER: '숫자로 작성해주세요.',
      SIGN: '* 근로계약서에 서명해주세요!',
    },
  },
  [Languages.VE]: {
    CONTRACT: 'Hợp đồng lao động',
    WORKING_PLACE: '1. Nơi làm việc',
    RESPONSIBILITIES: '2. Nội dung công việc',
    WORKING_HOURS: '3. Ngày làm việc và giờ làm việc theo ngày',
    DAY_OFF: '4. Ngày nghỉ hàng tuần',
    SALARY: '5. Tiền lương',
    ANNUAL_PAID_LEAVE: '6. Nghỉ phép có lương hàng năm',
    RULE: '7. Quy tắc lao động',
    SENTENCE1:
      'Người sử dụng lao động và người lao động cần tuân thủ hợp đồng lao động, quy tắc lao động và thỏa thuận tập thể một cách nghiêm túc.',
    SENTENCE2: 'Các điều khoản không được quy định trong hợp đồng này sẽ được điều chỉnh theo "Luật lao động".',
    SIGN: 'Ký tên',
    SUBMIT_CHECK: 'Bạn có chắc chắn muốn nộp không?',
    SUBMIT: 'Gửi đi',
    ERROR: {
      WORKING_PLACE: 'Vui lòng điền nơi làm việc.',
      RESPONSIBILITIES: 'Vui lòng mô tả chi tiết công việc.',
      WORKING_HOURS: 'Vui lòng ghi rõ ngày làm việc và giờ làm việc hàng ngày.',
      DAY_OFF: 'Vui lòng ghi thông tin về ngày nghỉ hàng tuần.',
      SALARY: 'Vui lòng điền thông tin lương.',
      ANNUAL_PAID_LEAVE: 'Vui lòng ghi thông tin về nghỉ phép có lương hàng năm.',
      RULE: 'Vui lòng điền quy tắc làm việc.',
      SIGN: '* Vui lòng ký vào hợp đồng lao động!',
    },
  },
};
