## 📜 About

**react-permission-component** is a simple component for [React.js](https://reactjs.org/). It allows you to render a component or not based on specified permissions, for example render different components whether a user is admin or not.

## 💾 Install

```sh
npm install --save react-permission-component
```

## 💻 How To Use

```jsx
import React from 'react';
import PermissionWrapper from "./PermissionComponent";

const Example = () => {
    return(
        <div>
            <PermissionWrapper requiredPermissions={{isAdmin : true, hasDashboardAccess : true}} 
                               permissions={{hasAdmin:true}}  
                               orOperatorActive={true} 
                               disallowedComponent={<h1>Not available</h1>}>
                <h1>Available!</h1>
            </PermissionWrapper>
        </div>
    )
}
```

The children of this wrapper will only be rendered if the key-value pairs in the required permissions match the permissions supplied to the component.

## 📖 Available Props
| Prop                     | Description                                                                                                                   | Required |
|--------------------------|------------------------------------------------------------------------------------------------------------------------------|----------|
| requiredPermissions      | An object with key-value pairs which describe the required permissions                                                       | true     |
| permissions              | The supplied permissions of the user                                                                                         | true     |
| disallowedComponent      | The component that will be rendered in case permission is denied                                                             | false    |
| orOperatorActive         | If true, in case the user has at least one permission, children will be rendered                                             | false    |
| customValidationFunction | (permissions,requiredPermissions,orOperatorActive) as parameters If the function returns true, the children will be rendered | false    |