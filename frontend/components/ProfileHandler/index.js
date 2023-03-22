"use client"
import { useContext, useState } from "react"
import styles from "./style.module.scss"
import { logout } from "@/config/firebase"
import { UserContext } from "@/store/userContext"
import { useRouter } from "next/navigation"

const ProfileHandler = ({}) => {

    const [menuState, setMenuState] = useState(false)
    const {currentUser} = useContext(UserContext)
    const router = useRouter()
    const signOut = () => {
        try{
            logout()
            router.push('/login')
        }catch(err){
            console.log(err)
        }
    }
    return(
        <div className={styles.profileHandler}>
            <div tabindex="0" onBlur={() => setMenuState(false)} onClick={() => setMenuState(!menuState)} className={styles.profileHandler__display}>
                <div className={styles.profileHandler__display__status}/>
                <h3>{currentUser.name}</h3>
            </div>
            <div className={styles.profileHandler__hidden}>
                <ol style={menuState?{top:0}:{top:'-7rem'}} className={styles.profileHandler__hidden__menu}>
                    <li>Profile</li>
                    <li onClick={signOut}>Sign Out</li>
                </ol>
            </div>
        </div>
    )
}

export default ProfileHandler