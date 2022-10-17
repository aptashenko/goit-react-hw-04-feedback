import css from './Buttons.module.css'
import PropTypes from 'prop-types';


const Buttons = ({ buttonsNames, handleClick }) => (
    <ul className={css.list}>
        {buttonsNames.map((item, idx) => (
            <li key={idx}>
                <button className={`${css.button} ${css[item]}`} onClick={()=>handleClick(item)}>{ item }</button>
            </li>
        ))}
    </ul>
)

Buttons.propTypes = {
    buttonsNames: PropTypes.array,
    handleClick: PropTypes.func,
    item: PropTypes.string,
}

export default Buttons;