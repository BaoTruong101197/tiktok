import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

import Propper from '~/components/Propper';
import Item from './Item';
import { useState } from 'react';
import Header from './Header';

const cx = classNames.bind(styles);

function Menu({ items, children }) {
    const [listMenu, setListMenu] = useState([{ data: items }]);
    const currentMenu = listMenu[listMenu.length - 1];

    const renderItem = () => {
        return currentMenu.data.map((item, index) => {
            const isChildren = !!item.children;
            return (
                <Item
                    key={index}
                    item={item}
                    onClick={() => {
                        if (isChildren) {
                            setListMenu([...listMenu, item.children]);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            placement="bottom-end"
            interactive
            offset={[13, 0]}
            delay={[0, 700]}
            onHide={() => setListMenu((prev) => prev.slice(0, 1))}
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <Propper className={listMenu.length > 1 ? '' : 'paddingBottom'}>
                        {listMenu.length > 1 ? (
                            <Header onClick={() => setListMenu(listMenu.slice(0, listMenu.length - 1))} />
                        ) : (
                            <></>
                        )}
                        {renderItem()}
                    </Propper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
