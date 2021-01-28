import React, { ReactNode } from "react";
import { Redirect, Route} from "react-router-dom";


interface IProps {
    children: ReactNode;
    path: string;
    isAuthorized: boolean;
}

const PrivateRoute: React.FC<IProps> = (props: IProps) => {
    const { children, isAuthorized } = props;
    return (
    <Route
        render={({ location }) =>
        isAuthorized? (
            children
        ) : (
            <Redirect
            to={{
                pathname: "/form",
                state: { from: location }
            }}
            />
        )
        }
    />
    );
}

export default PrivateRoute;