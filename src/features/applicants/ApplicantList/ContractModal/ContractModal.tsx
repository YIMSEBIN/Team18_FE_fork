import { Modal } from '@/components/common';
import ModalText from './ModalText/ModalText';
import { useGetForeigner } from '@/apis/applicants/hooks/useGetForeigner';
import ModalButtons from './ModalButtons/ModalButtons';

interface ContractModalProps {
  isOpen: boolean;
  onClose: () => void;
  userId: number;
  applyId: number;
}

export default function ContractModal({ isOpen, onClose, userId, applyId }: ContractModalProps) {
  const { data: foreigner } = useGetForeigner(userId);

  return (
    <>
      {isOpen && foreigner && (
        <Modal
          textChildren={
            <ModalText foreignerIdNumber={foreigner.foreignerIdNumber} visaGenerateDate={foreigner.visaGenerateDate} />
          }
          buttonChildren={<ModalButtons applyId={applyId} onClose={onClose} />}
          onClose={onClose}
          style={{ padding: '15px' }}
        />
      )}
    </>
  );
}
