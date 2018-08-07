import React from 'react';
import styles from './Viewer.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Viewer = ({mediaType, url}) => {
  console.log(url);
  return (
    <div className={cx('viewer')}>
      {
        mediaType === 'image' ? (
          <img onClick={() => window.open(url)} src = {url} alt = "menu"/>
        ) : (
          <div/>
        )
      }
    </div>
  );
};

export default Viewer;