import React, { useState } from 'react';
import Modal from '@/components/Modal';
import ModalHeader from '@/components/Modal/components/ModalHeader';
import CustomButton from '@/components/CustomButton';
import { inputToNumber } from '@/utils/input';
import { getCredit, getUpdateCredit } from '@/contexts/CreditContext';

const DonationModal = ({ isOpen, closeModal, item }) => {
  const [creditInput, setCreditInput] = useState('');

  const credit = getCredit();
  const setCredit = getUpdateCredit();

  // 후원할 값 입력
  const handleInputChange = (event) => {
    setCreditInput(event.target.value);
  };

  // 후원하기 버튼 클릭
  const handleDonateClick = () => {
    if (parseInt(creditInput) && creditInput <= credit) {
      setCredit(parseInt(credit - creditInput));
      handleCloseModal();
    }
  };

  // 모달 닫기
  const handleCloseModal = () => {
    setCreditInput('');
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} title="모달" onClose={handleCloseModal}>
      <ModalHeader title="후원하기" onClose={handleCloseModal} />
      <div
        style={{
          color: '#fff',
          width: '263px',
          height: '469px',
          textAlign: 'center',
        }}
      >
        <div>
          <img
            src={item.idol.profilePicture}
            alt="후원할 아이돌"
            style={{ width: '158px', height: '206px', borderRadius: '8px' }}
          />
          <br />
          <span>{item.subtitle}</span>
          <br />
          <span>{item.title}</span>
        </div>
        <input
          type="text"
          inputMode="numeric"
          placeholder="크레딧 입력"
          value={creditInput}
          onChange={async (e) => {
            e.target.value = inputToNumber(e.target.value);
            handleInputChange(e);
          }}
        />
        {creditInput > credit && (
          <p>갖고 있는 크레딧보다 더 많이 후원할 수 없어요</p>
        )}
        <CustomButton
          btnText="후원하기"
          disabled={
            !creditInput || creditInput > credit || creditInput[0] === '0'
          }
          onClick={handleDonateClick}
        />
      </div>
    </Modal>
  );
};

export default DonationModal;
