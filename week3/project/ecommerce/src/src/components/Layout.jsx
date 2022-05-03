import {Link} from 'react-router-dom';

const Layout = ({ pageTitle, children }) => {
    return (
        <div>
            <div style={{
                height: '100px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#000',
                color: '#fff',
                fontSize:'32px',
            }}>
                {pageTitle}
            </div>
            <div class="topnav">
                <Link className="active" to="/">Products</Link>
                <Link to="/favorites">Favourites</Link>
            </div>
            {children}
        </div>)
};

export default Layout;