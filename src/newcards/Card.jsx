import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { userActions } from '_store';
import Newcards from './Newcards';

export { Card };

function Card() {
    const dispatch = useDispatch();
    const { user: authUser } = useSelector(x => x.auth);
   

    useEffect(() => {
        dispatch(userActions.getAll());
    }, []);

    return (
        <div>
            <Newcards></Newcards>
        </div>
    );
}
