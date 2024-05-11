import React, { useState, useEffect } from 'react';
import Modal from '@/components/Modal';
import ModalHeader from '@/components/Modal/components/ModalHeader';
import CustomButton from '@/components/CustomButton';
import { getStorage, setStorage } from '@/utils/localStorage';
import { inputToNumber } from '@/utils/input';

const DonationModal = ({ isOpen, closeModal, item }) => {
  const [creditInput, setCreditInput] = useState('');
  const [credit, setCredit] = useState(0);

  const handleInputChange = (event) => {
    setCreditInput(event.target.value);
  };

  const handleDonateClick = () => {
    if (parseInt(creditInput) && creditInput <= credit) {
      setStorage('credit', parseInt(credit - creditInput));
      setCreditInput('');
      closeModal();
    }
  };

  useEffect(() => {
    const storedCredit = getStorage('credit');
    if (storedCredit) {
      setCredit(parseInt(storedCredit));
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} title="모달" onClose={closeModal}>
      <ModalHeader title="후원하기" onClose={closeModal} />
      <div
        style={{
          color: '#fff',
          width: '327px',
          height: '509px',
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
