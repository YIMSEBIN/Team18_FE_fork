import { usePostNotice } from '@/apis/postNotice/hooks/usePostNotice';
import { Button, Flex, Input, Typo } from '@/components/common';
import Layout from '@/features/layout';
import ROUTE_PATH from '@/routes/path';
import { NoticeRequestData } from '@/types';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

const default_inputs: NoticeRequestData = {
  title: '',
  companyScale: '',
  area: '',
  salary: 0,
  workDuration: '',
  workDays: '',
  workType: '',
  workHours: '',
  requestedCareer: '',
  majorBusiness: '',
  eligibilityCriteria: '',
  preferredConditions: '',
  employerName: '',
  companyName: '',
  companyId: 0,
};

export default function PostNotice() {
  const { t } = useTranslation();
  const mutation = usePostNotice();
  const navigate = useNavigate();
  const { companyId: curCompanyId } = useParams();

  const [inputs, setInputs] = useState({ ...default_inputs });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const {
    title,
    companyScale,
    area,
    salary,
    workDuration,
    workDays,
    workType,
    workHours,
    requestedCareer,
    majorBusiness,
    eligibilityCriteria,
    preferredConditions,
    employerName,
    companyName,
  } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    if (name === 'salary') {
      if (!/^\d*$/.test(value)) {
        setErrors({
          ...errors,
          salary: '숫자로 입력해주세요.',
        });
        return;
      }
    }

    setInputs({
      ...inputs,
      [name]: name === 'salary' ? Number(value) : value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handlePostNotice = () => {
    const newErrors: { [key: string]: string } = {};

    if (!title) newErrors.title = '구인글 제목을 입력해주세요.';
    if (!companyScale) newErrors.companyScale = '회사 규모를 입력해주세요.';
    if (!area) newErrors.area = '지역을 입력해주세요.';
    if (!salary) newErrors.salary = '급여를 입력해주세요.';
    if (!workDuration) newErrors.workDuration = '근무 기간을 입력해주세요.';
    if (!workDays) newErrors.workDays = '근무 요일을 입력해주세요.';
    if (!workType) newErrors.workType = '근무 형태를 입력해주세요.';
    if (!workHours) newErrors.workHours = '근무 시간을 입력해주세요.';
    if (!requestedCareer) newErrors.requestedCareer = '요구 경력을 입력해주세요.';
    if (!majorBusiness) newErrors.majorBusiness = '주요 사업 내용을 입력해주세요.';
    if (!eligibilityCriteria) newErrors.eligibilityCriteria = '자격 요건을 입력해주세요.';
    if (!preferredConditions) newErrors.preferredConditions = '우대 조건을 입력해주세요.';
    if (!employerName) newErrors.employerName = '고용주 이름을 입력해주세요.';
    if (!companyName) newErrors.companyName = '회사명을 입력해주세요.';

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    inputs.companyId = Number(curCompanyId);

    mutation.mutate(inputs, {
      onSuccess: () => {
        navigate(ROUTE_PATH.HOME);
      },
      onError: () => {
        alert('값이 정상적으로 저장되지 않았습니다.');
      },
    });
  };

  return (
    <Layout>
      <section>
        <Flex direction="column" alignItems="center">
          <LineWrapper>
            <Flex direction="column" justifyContent="space-between" alignItems="center" style={{ width: '100%' }}>
              <Typo element="h1" size="24px" style={{ fontWeight: 'bold', marginBottom: '24px' }}>
                {t('postNotice.TITLE')}
              </Typo>
              <InputContainer>
                <Input
                  label={t('postNotice.NOTICE_TITLE')}
                  name="title"
                  style={InputStyle}
                  value={title}
                  onChange={onChange}
                ></Input>
                {errors.title && <ErrorText>{errors.title}</ErrorText>}
              </InputContainer>
              <InputContainer>
                <Input
                  label={t('postNotice.COMPANY_NAME')}
                  name="companyName"
                  style={InputStyle}
                  value={companyName}
                  onChange={onChange}
                ></Input>
                {errors.companyName && <ErrorText>{errors.companyName}</ErrorText>}
              </InputContainer>
              <InputContainer>
                <Input
                  label={t('postNotice.EMPLOYER_NAME')}
                  name="employerName"
                  style={InputStyle}
                  value={employerName}
                  onChange={onChange}
                ></Input>
                {errors.employerName && <ErrorText>{errors.employerName}</ErrorText>}
              </InputContainer>
              <InputContainer>
                <Input
                  label={t('postNotice.COMPANY_SCALE')}
                  name="companyScale"
                  style={InputStyle}
                  value={companyScale}
                  onChange={onChange}
                ></Input>
                {errors.companyScale && <ErrorText>{errors.companyScale}</ErrorText>}
              </InputContainer>
              <InputContainer>
                <Input
                  label={t('postNotice.AREA')}
                  name="area"
                  style={InputStyle}
                  value={area}
                  onChange={onChange}
                ></Input>
                {errors.area && <ErrorText>{errors.area}</ErrorText>}
              </InputContainer>
              <InputContainer>
                <Input
                  label={t('postNotice.SALARY')}
                  name="salary"
                  style={InputStyle}
                  value={salary}
                  onChange={onChange}
                ></Input>
                {errors.salary && <ErrorText>{errors.salary}</ErrorText>}
              </InputContainer>
              <InputContainer>
                <Input
                  label={t('postNotice.MAJOR_BUSINESS')}
                  name="majorBusiness"
                  style={InputStyle}
                  value={majorBusiness}
                  onChange={onChange}
                ></Input>
                {errors.majorBusiness && <ErrorText>{errors.majorBusiness}</ErrorText>}
              </InputContainer>
              <InputContainer>
                <Input
                  label={t('postNotice.WORKDURATION')}
                  labelStyle={{ width: '100px', textAlign: 'left' }}
                  name="workDuration"
                  style={InputStyle}
                  value={workDuration}
                  onChange={onChange}
                ></Input>
                {errors.workDuration && <ErrorText>{errors.workDuration}</ErrorText>}
              </InputContainer>
              <InputContainer>
                <Input
                  label={t('postNotice.WORKDAYS')}
                  name="workDays"
                  style={InputStyle}
                  value={workDays}
                  onChange={onChange}
                ></Input>
                {errors.workDays && <ErrorText>{errors.workDays}</ErrorText>}
              </InputContainer>
              <InputContainer>
                <Input
                  label={t('postNotice.WORKHOURS')}
                  name="workHours"
                  style={InputStyle}
                  value={workHours}
                  onChange={onChange}
                ></Input>
                {errors.workHours && <ErrorText>{errors.workHours}</ErrorText>}
              </InputContainer>
              <InputContainer>
                <Input
                  label={t('postNotice.WORKTYPE')}
                  name="workType"
                  style={InputStyle}
                  value={workType}
                  onChange={onChange}
                ></Input>
                {errors.workType && <ErrorText>{errors.workType}</ErrorText>}
              </InputContainer>
              <InputContainer>
                <Input
                  label={t('postNotice.REQUESTED_CAREER')}
                  name="requestedCareer"
                  style={InputStyle}
                  value={requestedCareer}
                  onChange={onChange}
                ></Input>
                {errors.requestedCareer && <ErrorText>{errors.requestedCareer}</ErrorText>}
              </InputContainer>
              <InputContainer>
                <Input
                  label={t('postNotice.ELIGIBILITY_CRITERIA')}
                  name="eligibilityCriteria"
                  style={InputStyle}
                  value={eligibilityCriteria}
                  onChange={onChange}
                ></Input>
                {errors.eligibilityCriteria && <ErrorText>{errors.eligibilityCriteria}</ErrorText>}
              </InputContainer>
              <InputContainer>
                <Input
                  label={t('postNotice.PREFERRED_CONDITIONS')}
                  name="preferredConditions"
                  style={InputStyle}
                  value={preferredConditions}
                  onChange={onChange}
                ></Input>
                {errors.preferredConditions && <ErrorText>{errors.preferredConditions}</ErrorText>}
              </InputContainer>
              <Button onClick={handlePostNotice} design="default" style={{ marginTop: '52px' }}>
                {t('postNotice.SUBMIT')}
              </Button>
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
  padding: 100px 100px;
  margin: 52px 0;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const InputContainer = styled.div`
  width: 700px;
  align-items: start;
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: wrap;
`;

const InputStyle = { width: '600px', height: '48px', marginTop: '12px' };

const ErrorText = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;
