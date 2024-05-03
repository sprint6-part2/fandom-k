import Header from '@/components/Header';
import Sample from '@/components/Sample/Sample';
import useModal from '@/hooks/useModal';
import Modal from '@/components/Modal';
import ModalHeader from '@/components/Modal/components/ModalHeader';
import Profile from '@/components/Profile';

const TestPage = () => {
  const [isOpen, openModal, closeModal] = useModal();

  return (
    <div>
      <Header />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Profile
          clicked
          onClickProfile={() => {
            return console.log('프로필사진 누름');
          }}
          imageUrl="https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1714493431544/rllze1.jpeg"
        />
        <Profile
          size="bg"
          selected
          onClickDelete={() => {
            return console.log('삭제아이콘 누름');
          }}
          imageUrl="https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1714493561949/theboyz1.jpeg"
        />
        <Profile
          size="md"
          clicked
          onClickProfile={() => {
            return console.log('프로필사진 누름');
          }}
          imageUrl="https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1714493201646/nct1271.jpeg"
        />
        <Profile
          size="sm"
          selected
          onClickDelete={() => {
            return console.log('삭제아이콘 누름');
          }}
          imageUrl="https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1714492902115/seven1.jpeg"
        />
        <p>공통 컴포넌트 만든거는 test 페이지에서 테스트합니다.</p>
        <Sample />

        <button onClick={openModal}>Open Modal</button>
        <Modal isOpen={isOpen} title="모달" onClose={closeModal}>
          <ModalHeader title="모달" onClose={closeModal} />
          {/* <ModalMobileHeader title="모달" onClose={closeModal} /> */}
          <div style={{ color: '#fff' }}>바디입니다.</div>
        </Modal>
      </div>
    </div>
  );
};

export default TestPage;
