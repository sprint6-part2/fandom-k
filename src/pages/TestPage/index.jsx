import React from 'react';
import Sample from '@/components/Sample/Sample';
import ProgressBar from '@/pages/ListPage/components/ProgressBar';

const TestPage = () => {
  return (
    <div>
      <p>공통 컴포넌트 만든거는 test 페이지에서 테스트합니다.</p>
      <Sample />

      {/* 진행바 테스트 */}
      <div style={{ backgroundColor: 'black', height: '100vh' }}>
        <div //진행바 부모 div
          style={{
            backgroundColor: 'black',
            width: '300px', //진행바이 넓이는 부모 크기 100%로 설정 되어있어요
            margin: '0 auto',
            paddingTop: '50px',
          }}
        >
          <ProgressBar // 진행바
            receivedDonations={500000} // 받은 크레딧 양 그대로 정수로 넘겨주시면 됩니다.
            deadline="2025-10-10T00:00:00.000Z" // 데드라인 그대로 문자열 넘겨주시면 됩니다.
            targetDonation={1000000} // 목표 크레딧 양 그대로 정수로 넘겨주시면 됩니다.
          />
        </div>
      </div>
      {/* 진행바 테스트 끝 */}



    </div>
  );
};

export default TestPage;
