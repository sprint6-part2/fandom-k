import Logo from '@/assets/icons/Logo';
import style from './styles.module.scss';
/**
 * @param {string} content 보여주고자 하는 내용
 * @returns
 */

export const Nothing = ({ content }) => {
  return (
    <div className={style.container}>
      <Logo />
      <h2 className={style.content}>{content}</h2>
    </div>
  );
};
