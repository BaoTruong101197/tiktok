import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import images from '~/assets'

const cx = classNames.bind(styles)

function Header() {
    return <header className={cx('wrapper')}>
        <div className={cx('content')}>
            <img src={images.logo} alt="Tiktok logo" />
            <div className={cx('search')}>
                <input placeholder="Search accounts and videos" spellCheck={false} />
                <button className={cx('clear')}>
                    <img src={images.xMark} alt="xmark" />
                </button>
                {/* <FontAwesomeIcon className={cx('loading')} icon={faCircleNotch} /> */}
                <button className={cx('search-btn')}>
                    <img src={images.searchHeader} alt="search header" />
                </button>
            </div>
            <div className={cx('actions')}></div>
        </div>
    </header>
}

export default Header