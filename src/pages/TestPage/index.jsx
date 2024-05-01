import Header from '@/components/Header';
import Sample from '@/components/Sample/Sample';

const TestPage = () => {
  return (
    <div>
      <Header />
      <p>공통 컴포넌트 만든거는 test 페이지에서 테스트합니다.</p>
      <Sample />
    </div>
  );
};

export default TestPage;
