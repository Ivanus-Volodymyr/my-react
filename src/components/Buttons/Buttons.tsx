import React, {FC} from 'react';
import {useAppDispatch} from "../../hooks";

import {setPage} from "../../store";

const Buttons: FC = () => {
    const dispatch = useAppDispatch();


    return (
        <div>
            <button onClick={() => dispatch(setPage(-1))}>Prev page</button>
            <button onClick={() => dispatch(setPage(1))}>Next page</button>
        </div>
    );
};

export default Buttons;