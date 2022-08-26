import PropTypes from'prop-types'

const Header = ({ title }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <button className='btn'>ADD</button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task checker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header