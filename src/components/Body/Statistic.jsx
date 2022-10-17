import css from './stats.module.css';
import PropTypes from 'prop-types';

const Statistic = ({ buttonsValues, buttonsNames, count, percent }) => (
    <ul className={css.list}>
        {buttonsValues.map((item, idx) => (
            <li key={idx}>{buttonsNames[idx]}: <span className={item > 0 ? css[buttonsNames[idx]] : ''}>{ item }</span></li>
        ))}
        <li>Total: { count() }</li>
        <li>Positive Feedback: <span>{ percent() }</span></li>
    </ul>
)

Statistic.propTypes = {
    buttonsValues: PropTypes.array,
    buttonsNames: PropTypes.array,
    count: PropTypes.func,
    percent: PropTypes.func,
    item: PropTypes.string
}

export default Statistic;