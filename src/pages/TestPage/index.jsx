import ProFile from '@/components/Profile';

const TestPage = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <ProFile
        clicked
        onClickProfile={() => {
          return console.log('프로필사진 누름');
        }}
        imageUrl="https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1714493431544/rllze1.jpeg"
      />
      <ProFile
        size="bg"
        selected
        onClickDelete={() => {
          return console.log('삭제아이콘 누름');
        }}
        imageUrl="https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1714493561949/theboyz1.jpeg"
      />
      <ProFile
        size="md"
        clicked
        onClickProfile={() => {
          return console.log('프로필사진 누름');
        }}
        imageUrl="https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1714493201646/nct1271.jpeg"
      />
      <ProFile
        size="sm"
        selected
        onClickDelete={() => {
          return console.log('삭제아이콘 누름');
        }}
        imageUrl="https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1714492902115/seven1.jpeg"
      />
    </div>
  );
};

export default TestPage;
