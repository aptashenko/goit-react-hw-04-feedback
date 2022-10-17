import PropTypes from 'prop-types';

const Title = ({ title, children }) => (
    <>
    <h2>{title}</h2>
        {children}
    </>
)

Title.propTypes = {
    title: PropTypes.string,
}

export default Title;