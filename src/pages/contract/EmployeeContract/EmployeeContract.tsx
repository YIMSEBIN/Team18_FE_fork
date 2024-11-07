import { useGetMyContract } from '@/apis/contract/hooks/useGetMyContract';
import { useFetchPostContract } from '@/apis/contract/hooks/usePostContract';
import { Button, Flex, Typo } from '@/components/common';
import Layout from '@/features/layout';
import ROUTE_PATH from '@/routes/path';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

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
  const { t } = useTranslation();
  const { applyId } = useParams();
  const applicationId = Number(applyId);
  const { data: contract } = useGetMyContract(applicationId);
  const mutation = useFetchPostContract();
  const navigate = useNavigate();
  const contractData: ContractResponseData = contract || {};

  const handlePostSignEmployeeContract = () => {
    mutation.mutate(
      { applyId: applicationId },
      {
        onSuccess: () => {
          navigate(ROUTE_PATH.HOME);
        },
        onError: () => {
          // 이부분 에러처리 결정해야함.
          alert('값이 정상적으로 저장되지 않았습니다.');
        },
      },
    );
  };

  return (
    <Layout>
      <section>
        <Flex direction="column" alignItems="center">
          <LineWrapper>
            <Flex direction="column" justifyContent="space-between" alignItems="center" style={{ width: '100%' }}>
              <Typo element="h1" size="24px" style={{ fontWeight: 'bold', marginBottom: '24px' }}>
                {t('contract.CONTRACT')}
              </Typo>
              <InputWrapper>
                <InputContainer>
                  <Typo>{t('contract.WORKING_PLACE')}</Typo>
                  <Typo>{contractData.workingPlace}</Typo>
                </InputContainer>
                <InputContainer>
                  <Typo>{t('contract.RESPONSIBILITIES')}</Typo>
                  <Typo>{contractData.responsibilities}</Typo>
                </InputContainer>
                <InputContainer>
                  <Typo>{t('contract.WORKING_HOURS')}</Typo>
                  <Typo>{contractData.workingHours}</Typo>
                </InputContainer>
                <InputContainer>
                  <Typo>{t('contract.DAY_OFF')}</Typo>
                  <Typo>{contractData.dayOff}</Typo>
                </InputContainer>
                <InputContainer>
                  <Typo>{t('contract.SALARY')}</Typo>
                  <Typo>{contractData.salary}</Typo>
                </InputContainer>
                <InputContainer>
                  <Typo>{t('contract.ANNUAL_PAID_LEAVE')}</Typo>
                  <Typo>{contractData.annualPaidLeave}</Typo>
                </InputContainer>
                <InputContainer>
                  <Typo>{t('contract.RULE')}</Typo>
                  <Typo>{contractData.rule}</Typo>
                </InputContainer>
              </InputWrapper>
              <Typo element="p" size="16px" style={{ fontWeight: 'bold', marginTop: '24px' }}>
                {t('contract.SENTENCE1')}
              </Typo>
              <Typo element="p" size="16px" style={{ fontWeight: 'bold', marginTop: '24px' }}>
                {t('contract.SENTENCE2')}
              </Typo>
              <ButtonWrapper>
                <Button design="outlined" style={{ marginRight: '16px' }}>
                  {t('contract.SIGN')}
                </Button>
                <Button design="default" onClick={handlePostSignEmployeeContract} style={{}}>
                  {t('contract.SUBMIT')}
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
