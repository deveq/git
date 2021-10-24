import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div>
            {/* 
                Link는 Router의 자식으로 있어야 정상적으로 사용할 수 있음
            */}
            <Link to="/">Home</Link>
            <Link to='/about'>About</Link>
        </div>
    )
}

export default Navigation;