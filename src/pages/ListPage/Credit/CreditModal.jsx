import React, { useState } from 'react';
import Modal from '@/components/Modal';
import ModalHeader from '@/components/Modal/components/ModalHeader';
import CustomButton from '@/components/CustomButton';
import { getCredit, getUpdateCredit } from '@/contexts/CreditContext';

const CreditModal = ({ isOpen, closeModal }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const credit = getCredit();
  const setCredit = getUpdateCredit();

  // 크레딧 선택
  const handleSelectValue = (value) => {
    setSelectedValue(value);
  };

  // 크레딧 충전 클릭
  const handleChargeClick = () => {
    if (selectedValue) {
      const currentCredit = credit || 0;
      setCredit(parseInt(currentCredit + selectedValue));
      handleCloseModal();
    }
  };

  // 모달 닫기
  const handleCloseModal = () => {
    setSelectedValue(null);
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} title="모달" onClose={handleCloseModal}>
      <ModalHeader title="크레딧 충전하기" onClose={handleCloseModal} />
      <div style={{ color: '#fff', width: '263px', height: '332px' }}>
        <div>
          <label>
            <input
              type="radio"
              value={100}
              checked={selectedValue === 100}
              onChange={() => handleSelectValue(100)}
            />
            100
          </label>
          <label>
            <input
              type="radio"
              value={500}
              checked={selectedValue === 500}
              onChange={() => handleSelectValue(500)}
            />
            500
          </label>
          <label>
            <input
              type="radio"
              value={1000}
              checked={selectedValue === 1000}
              onChange={() => handleSelectValue(1000)}
            />
            1000
          </label>
        </div>
        <CustomButton
          btnText="충전하기"
          onClick={handleChargeClick}
          disabled={!selectedValue}
        />
      </div>
    </Modal>
  );
};

export default CreditModal;
