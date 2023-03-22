import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { history } from '_helpers';
import { authActions } from '_store';

function CallFunction(props){
    const dispatch = useDispatch();

    useEffect(()=>{
        function onSubmit(data) {            
            return dispatch(authActions.newCard( { name:`${data.name}'s Card`, cardExpiration:data.expiry,cardHolder:data.name,cardNumber:data.number,category:'AE' } ));
        };
        onSubmit(props.formData);
    },[])

    
    return(
        <div></div>
    );
}



export default CallFunction;
