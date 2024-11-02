import { Button, Flex, List, Table, Td, Th, Typo } from '@/components/common';
import { RecruitmentItem } from '@/types';
import { buttonGroupStyle, buttonStyle, recruitmentStyle, recruitmentTitleStyle } from './RecruitmentsTable.styles';
import { useNavigate, useParams } from 'react-router-dom';
import ROUTE_PATH from '@/routes/path';
import { useCloseRecruitment } from '@/apis/recruitments/hooks/useCloseRecruitment';
import { useState } from 'react';

type Props = {
  recruitmentList: RecruitmentItem[];
};

export default function RecruitmentsTable({ recruitmentList }: Props) {
  const navigate = useNavigate();
  const { companyId } = useParams();
  const mutation = useCloseRecruitment();
  const [closedRecruitment, setClosedRecruitment] = useState<{ [key: number]: boolean }>({});

  const handleApplicantClick = (companyId: string, recruitmentId: number) => {
    navigate(
      ROUTE_PATH.APPLICANTS.replace(':companyId', companyId).replace(':recruitmentId', recruitmentId.toString()),
    );
  };

  const handleCloseRecruitmentClick = (recruitmentId: number) => {
    mutation.mutate(recruitmentId, {
      onSuccess: () => {
        setClosedRecruitment((prev) => ({
          ...prev,
          [recruitmentId]: true,
        }));
      },
      onError: () => {
        // TODO: 에러 처리 결정
        alert('마감 실패');
      },
    });
  };

  return (
    <Table>
      <thead>
        <tr>
          <Th>근무지</Th>
          <Th>공고 제목</Th>
        </tr>
      </thead>
      <tbody>
        <List
          items={recruitmentList}
          renderItem={(recruitment) => (
            <tr key={recruitment.recruitmentId}>
              <Td>{recruitment.area}</Td>
              <Td>
                <Flex css={recruitmentStyle}>
                  <Flex direction="column" justifyContent="center" gap={{ y: '5px' }}>
                    <Typo size="16px" style={recruitmentTitleStyle}>
                      {recruitment.companyName}
                    </Typo>
                    <Typo element="p" size="16px">
                      {recruitment.koreanTitle}
                    </Typo>
                  </Flex>
                  <Flex css={buttonGroupStyle}>
                    <Button
                      css={buttonStyle}
                      onClick={() => handleApplicantClick(companyId!, recruitment.recruitmentId)}
                    >
                      지원자 보러가기
                    </Button>
                    <Button
                      css={buttonStyle}
                      onClick={() => handleCloseRecruitmentClick(recruitment.recruitmentId)}
                      design={closedRecruitment[recruitment.recruitmentId] ? 'deactivate' : 'default'}
                      disabled={closedRecruitment[recruitment.recruitmentId]}
                    >
                      {closedRecruitment[recruitment.recruitmentId] ? '마감완료' : '마감하기'}
                    </Button>
                  </Flex>
                </Flex>
              </Td>
            </tr>
          )}
        />
      </tbody>
    </Table>
  );
}
