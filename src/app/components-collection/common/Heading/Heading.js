import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Heading.module.scss';

export function Heading({
  level,
  fontSize = null,
  transform = null,
  className,
  children
}) {
  const HeadingTag = `h${level}`;

  return (
    <HeadingTag
      className={classNames(
        { [styles[transform]]: transform },
        className
      )}
      style={{ fontSize: fontSize }}
    >
      {children}
    </HeadingTag>
  );
}

Heading.propTypes = {
  level: PropTypes.number.isRequired,
  fontSize: PropTypes.string,
  transform: PropTypes.string,
  className: PropTypes.any,
  children: PropTypes.string,
}

export function ScreenHeading({ children }) {
  return (
    <h1 className={styles.screenHeading}>
      {children}
    </h1 >
  )
}
