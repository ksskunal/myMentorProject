import { Link } from 'react-router-dom'
function Left() {
    return (
        <>
            <div>
                <Link to='/coursemanage' style={{ textDecoration: 'none', color: 'white' ,width: '100%'}}>
                    <button style={{ textDecoration: 'none', color: 'white' ,width: '100%'}} className="btn btn-primary">Courses management</button>
                </Link>

                <Link to='/mentormanage' style={{ textDecoration: 'none', color: 'white' }}>
                    <button className="btn btn-primary mt-3" style={{ textDecoration: 'none', color: 'white' ,width: '100%'}}>Mentor management</button>
                </Link>

                <Link to='/usermanage' style={{ textDecoration: 'none', color: 'white' }}>
                    <button className="btn btn-primary mt-3" style={{ textDecoration: 'none', color: 'white' ,width: '100%' }}>User management</button>
                </Link>
            </div>
        </>
    );
}

export default Left;