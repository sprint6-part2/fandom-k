import Sample from '@/components/Sample/Sample';
import useModal from '@/hooks/useModal';
import Modal from '@/Modal';

const TestPage = () => {
  const [isOpen, openModal, closeModal] = useModal();

  return (
    <div>
      <p>공통 컴포넌트 만든거는 test 페이지에서 테스트합니다.</p>
      <Sample />

      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isOpen} title="모달" onClose={closeModal} isFull="true">
        <div style={{ color: '#fff' }}>바디입니다.</div>
      </Modal>
    </div>
  );
};

export default TestPage;
