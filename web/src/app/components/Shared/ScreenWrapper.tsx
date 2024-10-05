import React, {ReactNode} from 'react';
import {cn} from "../../utils/index"

type IParameters = {
    className?: string,
    children: ReactNode
}

function ScreenWrapper({className, children}: IParameters) {
    return (
        <div className={cn("mx-auto h-screen", className)}>
            {children}
        </div>
    );
}

export default ScreenWrapper;