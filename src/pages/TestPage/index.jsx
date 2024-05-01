import ProFile from '@/components/Profile';

const TestPage = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <ProFile
        selected
        imageUrl="https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1714493431544/rllze1.jpeg"
      />
      <ProFile
        size="bg"
        imageUrl="https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1714493561949/theboyz1.jpeg"
      />
      <ProFile
        size="md"
        selected
        imageUrl="https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1714493201646/nct1271.jpeg"
      />
      <ProFile
        size="sm"
        imageUrl="https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1714492902115/seven1.jpeg"
      />
    </div>
  );
};

export default TestPage;
