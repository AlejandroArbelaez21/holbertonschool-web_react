import React from 'react';
import BodySection from './BodySection'
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const BodySectionWithMarginBottom = (props) => {
  return (
    <div className={css(styles.margin)}>
      <BodySection {...props} />
    </div>
  );
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string
}

BodySectionWithMarginBottom.defaultProps = {
  title: ''
}

const styles = StyleSheet.create({
  margin: {
    marginBottom: '40px'
  }
});

export default BodySectionWithMarginBottom;
