import React from 'react';
import s from './InputElement.module.css';

const InputElement = () => {
  return (
    <div>
      <div className={s.main}>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
    </div>
  );
};

export default InputElement;
