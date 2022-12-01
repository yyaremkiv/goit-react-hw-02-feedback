import PropTypes from 'prop-types';
import css from './Section.module.scss';

export const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      <h1 className={css.section__title}>{title}</h1>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
