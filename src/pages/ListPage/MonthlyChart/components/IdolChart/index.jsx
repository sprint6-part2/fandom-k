import LoadingError from '@/components/LoadingError';
import Spinner from '@/assets/icons/Spinner';
import ChartElement from '../ChartElement';
import classNames from 'classnames';
import styles from './styles.module.scss';

const IdolChart = ({ isLoading, loadingError, idolList }) => {
  const chartClass = classNames(styles.chart, {
    [styles.even]: idolList.length % 2 === 0,
  });

  if (loadingError) {
    return (
      <div className={styles.errorMessage}>
        <LoadingError errorMessage={loadingError.message} />
      </div>
    );
  } else if (idolList.length == 0 && isLoading) {
    return (
      <div className={styles.loading_spinner}>
        <Spinner />
      </div>
    );
  } else {
    return (
      <ul className={chartClass}>
        {idolList.map((idol) => {
          return <ChartElement key={idol.id} idol={idol} />;
        })}
      </ul>
    );
  }
};
export default IdolChart;
