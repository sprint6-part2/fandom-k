import CustomButton from '@/components/CustomButton';
import Spinner from '@/assets/icons/Spinner';
import styles from './styles.module.scss';

const MoreButton = ({
  isLoading,
  loadingError,
  idolListLength,
  handleMoreBtn,
  nextCursor,
}) => {
  return (
    <div className={styles.more_button}>
      {isLoading && idolListLength > 0 ? (
        <CustomButton
          btnText={<Spinner width="100%" height="100%" fill="white" />}
          disabled
        />
      ) : (
        !loadingError &&
        nextCursor && <CustomButton btnText="더보기" onClick={handleMoreBtn} />
      )}
    </div>
  );
};
export default MoreButton;
