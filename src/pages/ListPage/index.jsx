import Header from '@/components/Header';
import Credit from './Credit';
import style from './styles.module.scss';

const ListPage = () => {
  return (
    <div className={style.container}>
      <Header />
      <main className={style.main}>
        <Credit />
      </main>
    </div>
  );
};

export default ListPage;
