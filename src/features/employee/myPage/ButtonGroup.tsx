import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import ROUTE_PATH from '@/routes/path';
import { Button, Icon, Typo } from '@/components/common';
import { useTranslation } from 'react-i18next';
import { RequiredFieldCheckProps } from '@/pages/recruit/RecruitType';

export default function ButtonGroup({ requiredFieldCheck }: { requiredFieldCheck: RequiredFieldCheckProps }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { resumeExistence, visaExistence, foreignerIdNumberExistence } = requiredFieldCheck;

  return (
    <ColumnSection>
      <ActiveButton
        design="outlined"
        style={{ borderRight: '3px solid #0a65cc' }}
        onClick={() => {
          navigate(ROUTE_PATH.RESUME);
        }}
      >
        <Typo bold>{resumeExistence ? t('employeeMyPage.UPDATE_RESUME') : t('employeeMyPage.REGISTER_RESUME')}</Typo>
        {resumeExistence ? <Icon.EmployeePage.Check /> : <Icon.EmployeePage.Bag />}
      </ActiveButton>
      <ActiveButton
        design="outlined"
        style={{ borderRight: '3px solid #0a65cc' }}
        onClick={() => {
          navigate(ROUTE_PATH.REGISTERSIGN);
        }}
      >
        <Typo bold>{visaExistence ? t('employeeMyPage.UPDATE_SIGN') : t('employeeMyPage.REGISTER_SIGN')}</Typo>
        {visaExistence ? <Icon.EmployeePage.Check /> : <Icon.EmployeePage.Pen />}
      </ActiveButton>
      <ActiveButton
        design="outlined"
        onClick={() => {
          navigate(ROUTE_PATH.REGISTER_VISA);
        }}
      >
        <Typo bold>
          {foreignerIdNumberExistence ? t('employeeMyPage.UPDATE_VISA') : t('employeeMyPage.REGISTER_VISA')}
        </Typo>
        {foreignerIdNumberExistence ? <Icon.EmployeePage.Check /> : <Icon.EmployeePage.Card />}
      </ActiveButton>
    </ColumnSection>
  );
}

const ColumnSection = styled.div`
  width: 100%;
  display: flex;
`;

const ActiveButton = styled(Button)`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  border-radius: 0;
  border: 0;
  color: #000;
  transition:
    background-color 0.3s,
    background-image 0.3s; // 배경 색상과 이미지 애니메이션

  &:hover {
    * {
      color: #fff;
    }
  }
`;
