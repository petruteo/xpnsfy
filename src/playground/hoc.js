//higher order componenet


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
    <h1>INFO</h1>
    <p> this is the info: {props.info}</p> 
    </div>
);


const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAdmin && <p>This is private info, please don't share</p>}
        <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentification = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAuthenticated && <Info {...props}/>}
        {!props.isAuthenticated && <p>you need to be authenticated to see this info</p>}

        </div>
    )
};


const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentification(Info);

// ReactDOM.render(<AdminInfo isAdmin={true}  info="These are the details ****" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true}  info="These are the details ****" />, document.getElementById('app'));