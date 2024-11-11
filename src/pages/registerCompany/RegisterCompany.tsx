import { CompanyRequestData, usePostCompany } from '@/apis/registerCompany/hooks/useRegisterCompany';
import { Button, Flex, Input } from '@/components/common';
import Title from '@/components/common/Title';
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
  const [accountImg, setAccountImg] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const { name, industryOccupation, brand, revenuePerYear } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    if (name === 'revenuePerYear') {
      if (!/^\d*$/.test(value)) {
        setErrors({
          ...errors,
          revenuePerYear: '숫자로 입력해주세요.',
        });
        return;
      }
    }

    setInputs({
      ...inputs,
      [name]: name === 'revenuePerYear' ? Number(value) : value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const newfile = e.target.files?.[0];
    if (newfile) {
      reader.readAsDataURL(newfile);
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setAccountImg(reader.result);
        }
      };
      setFile(newfile);
      setErrors({ ...errors, logoImage: '' });
    }
  };

  const handlePostCompany = () => {
    const newErrors: { [key: string]: string } = {};

    if (!name) newErrors.name = '회사명을 입력해주세요.';
    if (!industryOccupation) newErrors.industryOccupation = '산업/직종을 입력해주세요.';
    if (!brand) newErrors.brand = '브랜드명을 입력해주세요.';
    if (!revenuePerYear) newErrors.revenuePerYear = '연 매출을 입력해주세요.';
    if (!file) newErrors.logoImage = '로고 이미지를 업로드해주세요.';

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

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
      <Flex justifyContent="center">
        <LineWrapper style={{ backgroundColor: 'white' }}>
          <Flex direction="column" justifyContent="space-between" alignItems="center" style={{ width: '700px' }}>
            <Title text={t('registerCompany.TITLE')} />
            <InputWrapper>
              <Flex direction="row" justifyContent="space-between" alignItems="center">
                <Flex
                  direction="column"
                  justifyContent="space-between"
                  alignItems="center"
                  style={{ marginRight: '30px', width: 'auto' }}
                >
                  <InputContainer style={{ width: 'auto' }}>
                    <Input
                      label={t('registerCompany.COMPANYNAME')}
                      labelStyle={{ width: '150px', fontWeight: 'bold' }}
                      name="name"
                      value={name}
                      onChange={onChange}
                      style={{ width: '270px', height: '48px' }}
                    />
                    {errors.name && <ErrorText>{errors.name}</ErrorText>}
                  </InputContainer>
                  <InputContainer style={{ width: 'auto' }}>
                    <Input
                      label={t('registerCompany.BRAND')}
                      labelStyle={{ width: '150px', fontWeight: 'bold' }}
                      name="brand"
                      value={brand}
                      onChange={onChange}
                      style={{ width: '270px', height: '48px' }}
                    />
                    {errors.brand && <ErrorText>{errors.brand}</ErrorText>}
                  </InputContainer>
                </Flex>
                <Flex direction="column" justifyContent="space-between" alignItems="center" style={{ width: 'auto' }}>
                  <label htmlFor="imgChangeBtn" style={{ fontWeight: 'bold' }}>
                    {t('registerCompany.LOGOIMAGE')}
                  </label>
                  <ImgInputLabel
                    htmlFor="imgChangeBtn"
                    userImgUrl={accountImg}
                    style={{ width: '250px', height: '100px', border: '4px dashed #e4e5e8', marginTop: '10px' }}
                  ></ImgInputLabel>
                  {errors.logoImage && <ErrorText>{errors.logoImage}</ErrorText>}
                  <ImgInput
                    type="file"
                    accept="image/*"
                    id="imgChangeBtn"
                    onChange={onFileChange}
                    style={{ display: 'none' }}
                  />
                </Flex>
              </Flex>
              <Flex direction="column" justifyContent="space-between" alignItems="center">
                <InputContainer>
                  <Input
                    label={t('registerCompany.INDUSTRY_OCCUPATION')}
                    labelStyle={{ width: '150px', fontWeight: 'bold' }}
                    name="industryOccupation"
                    value={industryOccupation}
                    onChange={onChange}
                    style={{ width: '550px', height: '48px' }}
                  ></Input>
                  {errors.industryOccupation && <ErrorText>{errors.industryOccupation}</ErrorText>}
                </InputContainer>
                <InputContainer>
                  <Input
                    label={t('registerCompany.REVENUE_PERYEAR')}
                    labelStyle={{ width: '150px', fontWeight: 'bold' }}
                    name="revenuePerYear"
                    value={revenuePerYear}
                    onChange={onChange}
                    style={{ width: '550px', height: '48px' }}
                  ></Input>
                  {errors.revenuePerYear && <ErrorText>{errors.revenuePerYear}</ErrorText>}
                </InputContainer>
              </Flex>
            </InputWrapper>
            <ButtonWrapper>
              <Button design="default" onClick={handlePostCompany}>
                {t('registerCompany.SUBMIT')}
              </Button>
            </ButtonWrapper>
          </Flex>
        </LineWrapper>
      </Flex>
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

const InputWrapper = styled.div`
  width: 100%;
  margin-top: 28px;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-flow: wrap;
  margin: 12px 0;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 52px;
`;

const ImgInputLabel = styled.label<{ userImgUrl: string }>`
  background-image: url(${({ userImgUrl }) => userImgUrl});
`;

const ImgInput = styled.input``;

const ErrorText = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;
