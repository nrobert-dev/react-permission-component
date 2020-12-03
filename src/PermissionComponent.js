import React, { useEffect, useState } from 'react';

/*
    orOperatorActive : when enabled, at least one of the keys between userPermissions<->requiredPermissions has to mach
    disallowedComponent : displayed component when the user does not have permissions
 */

const PermissionWrapper = ({ permissions = {}, requiredPermissions = {}, disallowedComponent = null, orOperatorActive = false, customValidationFunction = null, children}) => {
    const [allowed, setAllowed] = useState(false);

    const hasPermission = () => {
        let hasPermission = true;
        let hasOrPermission = null;
        if(Object.keys(requiredPermissions).length === 0 && requiredPermissions.constructor === Object) return hasPermission;


        Object.keys(requiredPermissions).forEach(e => {
            if(!permissions.hasOwnProperty(e)){
                hasPermission = false;
            }
            else if(permissions[e] !== requiredPermissions[e]){
                hasPermission = false;
            }
            //Handling cases where we need at least one permission satisfied from the requiredPermissions list. Or operator
            else if(permissions[e] === requiredPermissions[e] && orOperatorActive){
                hasOrPermission = true;
            }
        });
        return hasOrPermission || hasPermission;
    };

    useEffect(() => {
        if(customValidationFunction) setAllowed(customValidationFunction(permissions, requiredPermissions, orOperatorActive));
        else setAllowed(hasPermission());
    },[permissions,requiredPermissions]);

    return(
        <>
            {allowed ? children : disallowedComponent}
        </>
    );
};

export default PermissionWrapper;