import { useGetMyContract } from '@/apis/contract/hooks/useGetMyContract';
import { Button, Flex, Typo } from '@/components/common';
import Layout from '@/features/layout';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';

export type ContractResponseData = {
  salary: string;
  workingHours: string;
  dayOff: string;
  annualPaidLeave: string;
  workingPlace: string;
  responsibilities: string;
  rule: string;
};

export default function EmployeeContract() {
  const { applyId: applicationId } = useParams();
  const { data: contract } = useGetMyContract(Number(applicationId));
  const contractData: ContractResponseData = contract || {};

  return (
    <Layout>
      <section>
        <Flex direction="column" alignItems="center">
          <LineWrapper>
            <Flex direction="column" justifyContent="space-between" alignItems="center" style={{ width: '100%' }}>
              <Typo element="h1" size="24px" style={{ fontWeight: 'bold', marginBottom: '24px' }}>
                근 로 계 약 서
              </Typo>
              <InputWrapper>
                <InputContainer>
                  <Typo>1. 근무장소</Typo>
                  <Typo>{contractData.workingPlace}</Typo>
                </InputContainer>
                <InputContainer>
                  <Typo>2. 업무내용</Typo>
                  <Typo>{contractData.responsibilities}</Typo>
                </InputContainer>
                <InputContainer>
                  <Typo>3. 근로일 및 근로일별 근로시간</Typo>
                  <Typo>{contractData.workingHours}</Typo>
                </InputContainer>
                <InputContainer>
                  <Typo>4. 주휴일</Typo>
                  <Typo>{contractData.dayOff}</Typo>
                </InputContainer>
                <InputContainer>
                  <Typo>5. 임금</Typo>
                  <Typo>{contractData.salary}</Typo>
                </InputContainer>
                <InputContainer>
                  <Typo>6. 연차유급휴가</Typo>
                  <Typo>{contractData.annualPaidLeave}</Typo>
                </InputContainer>
                <InputContainer>
                  <Typo>7. 취업규칙</Typo>
                  <Typo>{contractData.rule}</Typo>
                </InputContainer>
              </InputWrapper>
              <Typo element="p" size="16px" style={{ fontWeight: 'bold', marginTop: '24px' }}>
                사용자와 근로자는 각자가 근로계약, 취업규칙, 단체협약을 지키고 성실하게 이행하여야 한다.
              </Typo>
              <Typo element="p" size="16px" style={{ fontWeight: 'bold', marginTop: '24px' }}>
                이 계약에서 정하지 않은 사항은 '근로기준법'에서 정하는 바에 따른다.
              </Typo>
              <ButtonWrapper>
                <Button design="outlined" style={{ marginRight: '16px' }}>
                  서명하기
                </Button>
                <Button design="default" style={{}}>
                  제출하기
                </Button>
              </ButtonWrapper>
            </Flex>
          </LineWrapper>
        </Flex>
      </section>
    </Layout>
  );
}

const LineWrapper = styled.div`
  border: 1px solid #e9e9e9;
  border-radius: 3px;
  padding: 100px 200px;
  margin: 52px 0;
`;

const InputWrapper = styled.div`
  margin-top: 28px;
`;

const InputContainer = styled.div`
  width: 700px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 24px 0;
`;

const ButtonWrapper = styled.div`
  width: 700px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 52px;
`;
