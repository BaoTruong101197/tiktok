import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                alt="Avatar"
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4e0560f87ee23089d4ea4db067cc8d60~c5_300x300.webp?x-expires=1653757200&x-signature=wwIN5vzCLZNQ5m9dBZfDAEq1yWw%3D"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Truong Quang Bao</span>
                    <img src={images.BlueTick} alt="Blue tick" />
                </h4>
                <span className={cx('username')}>baotruong</span>
            </div>
        </div>
    );
}

export default AccountItem;
