import { success } from "@/style/variables"
import styles from "./style.module.scss"


const Status = ({data,date,isActive}) => {

    let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };

    return(
        <div className={styles.status}>
        <div className={styles.status__status}>
          <div
            className={
              isActive
                ? styles.status__liveButton
                : styles.status__closedButton
            }
          />
          <div>
            {isActive ? (
              <h3>Live</h3>
            ) : (
              <h3 style={{ color: success, width: "max-content" }}>
                Auction Completed
              </h3>
            )}
          </div>
          {isActive && (
            <div>
              {data?.openTime?.toDate().toLocaleDateString("en-US", options)}
            </div>
          )}
        </div>
      </div>
    )

}

export default Status