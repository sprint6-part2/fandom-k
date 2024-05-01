import useModal from '../../hooks/useModal';
import Modal from '@/Modal';

const Sample = () => {
  const [isOpen, openModal, closeModal] = useModal();
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isOpen} title="모달 타이틀" onClose={closeModal}>
        <div style={{ color: '#fff' }}>바디입니다.</div>
      </Modal>
    </div>
  );
};

export default Sample;
