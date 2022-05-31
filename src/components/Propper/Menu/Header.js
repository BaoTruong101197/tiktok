import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { PrevIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Header({ onClick }) {
    return (
        <div className={cx('header-wrapper')}>
            <div className={cx('prev-icon')} onClick={onClick}>
                <PrevIcon />
            </div>
            <span>Language</span>
        </div>
    );
}

export default Header;
