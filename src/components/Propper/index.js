import styles from './Propper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Propper({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default Propper;
