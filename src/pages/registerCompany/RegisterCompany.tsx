import { CompanyRequestData, usePostCompany } from '@/apis/registerCompany/hooks/useRegisterCompany';
import { Button, Flex, Input, Typo } from '@/components/common';
import Layout from '@/features/layout';
import ROUTE_PATH from '@/routes/path';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const default_inputs = {
  name: '',
  industryOccupation: '',
  brand: '',
  revenuePerYear: 0,
  logoImage: undefined as File | undefined,
};

export default function RegisterCompany() {
  const { t } = useTranslation();
  const mutation = usePostCompany();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState<CompanyRequestData>({ ...default_inputs });
  const [file, setFile] = useState<File | null>(null);

  const { name, industryOccupation, brand, revenuePerYear } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newfile = e.target.files?.[0];
    if (newfile) {
      setFile(newfile);
    }
  };

  const handlePostCompany = () => {
    const formData = new FormData();

    const companyRequest = {
      name: inputs.name,
      industryOccupation: inputs.industryOccupation,
      brand: inputs.brand,
      revenuePerYear: inputs.revenuePerYear,
    };

    formData.append('companyRequest', JSON.stringify(companyRequest));

    if (file) {
      formData.append('logoImage', file);
    }
    mutation.mutate(formData, {
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
                {t('registerCompany.TITLE')}
              </Typo>
              <InputWrapper>
                <InputContainer>
                  <Input
                    label={t('registerCompany.LOGOIMAGE')}
                    name="logoImage"
                    type="file"
                    onChange={onFileChange}
                    // style={{ width: '570px', height: '48px' }}
                  ></Input>
                </InputContainer>
                <InputContainer>
                  <Input
                    label={t('registerCompany.COMPANYNAME')}
                    name="name"
                    value={name}
                    onChange={onChange}
                    style={InputStyle}
                  ></Input>
                </InputContainer>
                <InputContainer>
                  <Input
                    label={t('registerCompany.INDUSTRY_OCCUPATION')}
                    name="industryOccupation"
                    value={industryOccupation}
                    onChange={onChange}
                    style={InputStyle}
                  ></Input>
                </InputContainer>
                <InputContainer>
                  <Input
                    label={t('registerCompany.BRAND')}
                    name="brand"
                    value={brand}
                    onChange={onChange}
                    style={InputStyle}
                  ></Input>
                </InputContainer>
                <InputContainer>
                  <Input
                    label={t('registerCompany.REVENUE_PERYEAR')}
                    name="revenuePerYear"
                    value={revenuePerYear}
                    onChange={onChange}
                    style={InputStyle}
                  ></Input>
                </InputContainer>
              </InputWrapper>
              <ButtonWrapper>
                <Button design="default" onClick={handlePostCompany}>
                  {t('registerCompany.SUBMIT')}
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
  justify-content: center;
  margin-top: 52px;
`;

const InputStyle = { width: '570px', height: '48px' };
