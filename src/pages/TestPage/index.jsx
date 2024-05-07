import React from 'react';
import ProgressBar from '@/pages/ListPage/components/ProgressBar';
import Header from '@/components/Header';
import styles from './styles.module.scss';
import Carousel from '@/components/Carousel';
import useModal from '@/hooks/useModal';
import Modal from '@/components/Modal';
import ModalHeader from '@/components/Modal/components/ModalHeader';
// import ModalMobileHeader from '@/components/Modal/components/ModalMobileHeader';
import MyPage from '../MyPage';

const TestPage = () => {
  const [isOpen, openModal, closeModal] = useModal();

  return (
    <div>
      <Header />
      <MyPage />
    </div>
  );
};

export default TestPage;
