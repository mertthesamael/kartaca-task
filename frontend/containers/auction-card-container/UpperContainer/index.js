import { useRouter } from "next/navigation";
import styles from "./style.module.scss"



const UpperContainer = ({data,isActive,mock}) => {
  const router = useRouter()
    return (
      <div
        className={styles.upperContainer}
        style={!isActive ? { height: "100%" } : {}}
      >
        <div className={styles.upperContainer__title}>
          <h1 onClick={() => router.push(mock ? "/login" : `/${data.id}`)}>
            {data.name}
          </h1>
        </div>
      </div>
    );
}

export default UpperContainer