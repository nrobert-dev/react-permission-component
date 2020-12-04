import React from 'react';
import PermissionWrapper from "./PermissionComponent";

const App = () => {
    return(
        <div>
            <PermissionWrapper requiredPermissions={{hasAdmin : true}} permissions={{hasAdmin : true}}  orOperatorActive={true} disallowedComponent={<h1>You are a pleb</h1>}>
                <h1>You have admin access 📜!</h1>
            </PermissionWrapper>
        </div>
    )
}

export default App;