import React, { useState } from 'react';
import Modal from '@/components/Modal';
import ModalHeader from '@/components/Modal/components/ModalHeader';
import CustomButton from '@/components/CustomButton';

const CreditModal = ({ isOpen, closeModal }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleSelectValue = (value) => {
    setSelectedValue(value);
  };

  const handleCharge = () => {
    if (selectedValue) {
      const currentCredit = localStorage.getItem('credit') || 0;
      const newCredit = parseInt(currentCredit) + selectedValue;
      localStorage.setItem('credit', newCredit);
      handleCloseModal();
    }
  };

  const handleCloseModal = () => {
    setSelectedValue(null);
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} title="모달" onClose={closeModal}>
      <ModalHeader title="크레딧 충전하기" onClose={handleCloseModal} />
      <div style={{ color: '#fff', width: '327px', height: '372px' }}>
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
          onClick={handleCharge}
          disabled={!selectedValue}
        />
      </div>
    </Modal>
  );
};

export default CreditModal;
