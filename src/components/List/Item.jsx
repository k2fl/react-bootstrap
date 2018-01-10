import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Button from '../Button';
import Icon from '../Icon';

import colors from '../../utils/colors';

// Class based component instead stateless functional, because refs needed.
// eslint-disable-next-line react/prefer-stateless-function
class Item extends Component {
  static propTypes = {
    color: PropTypes.oneOf(['', ...colors]),
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    onToggle: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    toggleIconName: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    color: '',
    active: false,
    disabled: false,
    className: '',
    onClick: false,
    onToggle: false,
    toggleIconName: 'plus',
    children: null,
  };

  render() {
    const {
      color,
      active,
      disabled,
      className,
      onClick,
      onToggle,
      toggleIconName,
      children,
      ...props
    } = this.props;

    return (
      <li
        {...props}
        className={cn(
          'list-group-item',
          {
            [`list-group-item-${color}`]: color,
            'list-group-item-action': onClick,
            toggled: onToggle,
            active,
            disabled,
          },
          className
        )}
        {...(onClick ? { role: 'presentation', onClick } : {})}
      >
        {onToggle ? (
          <Button
            color={active ? 'primary' : 'link'}
            disabled={disabled}
            className='list-group-item-toggle'
            onClick={onToggle}
          >
            <Icon name={toggleIconName} />
          </Button>
        ) : null}
        {children}
      </li>
    );
  }
}

export default Item;
