import React from 'react';
import LoaderStyles from '../styles/Loader.module.scss';

const Loader = () => {
  return (
    <div className={LoaderStyles.loader}>
      <div className={LoaderStyles.spinner_box}>
        <div className={LoaderStyles.three_quarter_spinner}>
        </div>
      </div>
    </div>
  );
};

export default Loader;
