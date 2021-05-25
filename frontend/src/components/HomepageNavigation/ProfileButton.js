import { logout } from '../../store/session'
import { useDispatch } from 'react-redux'

function ProfileButton(){
    const dispatch = useDispatch();
    function logOut(e){
        return dispatch(logout())
    }


    return(
        <div style={{fontSize: '33px'}} onClick={(e) => logOut()}>🤬</div>
    )
}
export default ProfileButton;
