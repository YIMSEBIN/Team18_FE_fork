import { Button, Flex, Input, Typo } from '@/components/common';
import Layout from '@/features/layout';
import styled from '@emotion/styled';

export default function EmployerContract() {
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
                  <Input label="1. 근무장소" style={{ width: '570px', height: '48px' }}></Input>
                </InputContainer>
                <InputContainer>
                  <Input label="2. 업무내용" style={{ width: '570px', height: '48px' }}></Input>
                </InputContainer>
                <InputContainer>
                  <Input label="3. 근로일 및 근로일별 근로시간" style={{ width: '570px', height: '48px' }}></Input>
                </InputContainer>
                <InputContainer>
                  <Input label="4. 주휴일" style={{ width: '570px', height: '48px' }}></Input>
                </InputContainer>
                <InputContainer>
                  <Input label="5. 임금" style={{ width: '570px', height: '48px' }}></Input>
                </InputContainer>
                <InputContainer>
                  <Input label="6. 연차유급휴가" style={{ width: '570px', height: '48px' }}></Input>
                </InputContainer>
                <InputContainer>
                  <Input label="7. 취업규칙" style={{ width: '570px', height: '48px' }}></Input>
                </InputContainer>
              </InputWrapper>
              <Typo element="p" size="16px" style={{ fontWeight: 'bold', marginTop: '24px' }}>
                사용자와 근로자는 각자가 근로계약, 취업규칙, 단체협약을 지키고 성실하게 이행하여야 한다.
              </Typo>
              <Typo element="p" size="16px" style={{ fontWeight: 'bold', marginTop: '24px' }}>
                이 계약에서 정하지 않은 사항은 '근로기준법'에서 정하는 바에 따른다.
              </Typo>
              <ButtonWrapper>
                <div>
                  <Button design="outlined" style={{ marginRight: '16px' }}>
                    미리보기
                  </Button>
                  <>
                    <input type="checkbox" />
                    <label>서명하기</label>
                  </>
                </div>
                <div>
                  <Button design="default" style={{ marginRight: '16px' }}>
                    다운로드
                  </Button>
                  <Button design="default">제출하기</Button>
                </div>
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
