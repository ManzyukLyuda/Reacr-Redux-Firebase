import React, { ReactNode } from "react";
import { Redirect, Route} from "react-router-dom";


interface IProps {
    children: ReactNode;
    path: string;
    isAutorixed: boolean;
}

const PrivateRoute: React.FC<IProps> = (props: IProps) => {
    const { children, isAutorixed } = props;
    return (
    <Route
        render={({ location }) =>
        isAutorixed? (
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