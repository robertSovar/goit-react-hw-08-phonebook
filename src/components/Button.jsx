/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

function Button({ children, action, type = 'button' }) {
  const style = css`
    background: orange;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    font-weight: 700;
    font-size: 14px;
    outline: none;
    padding: 8px 16px;
    text-align: center;
    margin-bottom: 6px;

    &:hover,
    &:focus {
      background: orange;
    }
    &:active {
      background: orange;
    }
  `;

  return (
    <button css={style} onClick={action} type={type}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  action: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
