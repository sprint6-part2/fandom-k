import Sample from '@/components/Sample/Sample';
import CustomButton from '@/components/CustomButton';

const TestPage = () => {
  return (
    <div>
      <p>공통 컴포넌트 만든거는 test 페이지에서 테스트합니다.</p>
      <Sample />

      <CustomButton text="지금 시작하기" disabled />
    </div>
  );
};

export default TestPage;
