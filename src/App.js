import React from 'react';
import PermissionWrapper from "./PermissionComponent";

const App = () => {
    return(
        <div>
            <PermissionWrapper requiredPermissions={{hasItem : true, hasFreedom : true}} permissions={{hasBada : true, hasItem : true}}  orOperatorActive={true} disallowedComponent={<h1>Not available</h1>}>
                <h1>Available!</h1>
            </PermissionWrapper>
        </div>
    )
}

export default App;