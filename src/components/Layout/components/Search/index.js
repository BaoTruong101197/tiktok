import { useEffect, useState, useRef } from 'react';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { useDebounce } from '~/hooks';

import { CircleXMarkIcon, HeaderSearchIcon } from '~/components/Icons';
import Propper from '~/components/Propper';
import AccountItem from '~/components/AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showListResult, setShowListResult] = useState(true);
    const [ShowLoading, setShowLoading] = useState(false);

    const inputRef = useRef();

    const debounced = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        setShowLoading(true);

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setShowLoading(false);
            })
            .catch(() => {
                setShowLoading(false);
            });
    }, [debounced]);

    const handleClearValue = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideListResult = () => {
        setShowListResult(false);
    };

    return (
        <HeadlessTippy
            visible={showListResult && searchResult.length > 0}
            interactive
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <Propper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </Propper>
                </div>
            )}
            onClickOutside={handleHideListResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={(e) => setShowListResult(true)}
                />
                {!!searchValue && !ShowLoading && (
                    <button className={cx('clear')} onClick={handleClearValue}>
                        <CircleXMarkIcon width="1.6rem" height="1.6rem" />
                    </button>
                )}
                {ShowLoading && <FontAwesomeIcon className={cx('loading')} icon={faCircleNotch} />}
                <button className={cx('search-btn')}>
                    <HeaderSearchIcon width="2.4rem" height="2.4rem" />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
