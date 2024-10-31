import { Button, Flex, List, Table, Td, Th } from '@/components/common';
import { useState } from 'react';
import ContractModal from '../ContractModal/ContractModal';
import { ApplicantData } from '@/types';
import { buttonGroupStyle, buttonsCellStyle, buttonStyle } from './ApplicantsTable.styles';

type Props = {
  applicantList: ApplicantData[];
};

export default function ApplicantsTable({ applicantList }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const handleOpenModal = (userId: number) => {
    setSelectedUserId(userId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUserId(null);
  };

  return (
    <>
      <Table>
        <thead>
          <tr>
            <Th>이름</Th>
            <Th>국적</Th>
            <Th>한국어 실력</Th>
            <Th></Th>
          </tr>
        </thead>
        <tbody>
          <List
            items={applicantList}
            renderItem={(applicant) => (
              <tr key={applicant.applyId}>
                <Td>{applicant.name}</Td>
                <Td>{applicant.applicantNation}</Td>
                <Td>{applicant.korean}</Td>
                <Td css={buttonsCellStyle}>
                  <Flex justifyContent="flex-end" alignItems="center" gap={{ x: '20px' }} css={buttonGroupStyle}>
                    <Button css={buttonStyle}>이력서</Button>
                    <Button css={buttonStyle}>지원서</Button>
                    <Button css={buttonStyle} onClick={() => handleOpenModal(applicant.userId)}>
                      계약하기
                    </Button>
                  </Flex>
                </Td>
              </tr>
            )}
          />
        </tbody>
      </Table>
      {selectedUserId && <ContractModal isOpen={isModalOpen} onClose={handleCloseModal} userId={selectedUserId} />}
    </>
  );
}