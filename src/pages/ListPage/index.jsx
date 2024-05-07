import Header from '@/components/Header';
import MonthlyChart from './MonthlyChart';

const ListPage = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '24px',
          backgroundColor: 'black',
        }}
      >
        <MonthlyChart />
      </div>
    </div>
  );
};

export default ListPage;
