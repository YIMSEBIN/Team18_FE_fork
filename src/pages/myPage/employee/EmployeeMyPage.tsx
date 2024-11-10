import { Flex, InnerContainer, Spinner, Typo } from '@/components/common';
import Layout from '@/features/layout';
import styled from '@emotion/styled';
import MyRecruitList from '../../../features/employee/myPage/MyRecruitList';
import { useGetMyApplication } from '@/apis/employee/hooks/useGetMyApplication';
import { useTranslation } from 'react-i18next';
import ProfileSection from '@/features/employee/myPage/ProfileSection';
import { css } from '@emotion/react';
import { useGetRequiredFieldCheck } from '@/apis/recruitmentsDetail/useRequiredFieldCheck';
import { type RequiredFieldCheckProps } from '@/pages/recruit/RecruitType';

export default function EmployeeMyPage() {
  const { t } = useTranslation();
  const { data: myRecruitList, isLoading } = useGetMyApplication();
  const { data: requiredFieldCheck } = useGetRequiredFieldCheck();
  const requiredFieldCheckData: RequiredFieldCheckProps = requiredFieldCheck || {
    resumeExistence: false,
    visaExistence: false,
    foreignerIdNumberExistence: false,
  };

  return (
    <Layout>
      <InnerContainer style={{ justifyContent: 'center', width: '70%', padding: '60px 0' }}>
        <ProfileSection requiredFieldCheck={requiredFieldCheckData} />
        <Section>
          <Typo bold element="h3" size="20px" style={{ marginBottom: '24px' }}>
            {t('employeeMyPage.MYRECRUITLIST')}
          </Typo>
          {isLoading ? (
            <Flex justifyContent="center" alignItems="center" css={spinnerFlexStyle}>
              <Spinner />
            </Flex>
          ) : (
            myRecruitList && <MyRecruitList myRecruitList={myRecruitList} />
          )}
        </Section>
      </InnerContainer>
    </Layout>
  );
}

const Section = styled.div`
  width: 100%;
  direction: column;
  align-items: center;
  margin-bottom: 52px;
`;

const spinnerFlexStyle = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
