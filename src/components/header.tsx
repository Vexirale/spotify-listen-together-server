import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div className={styles.mainTextContainer}>
      <div className={styles.mainText}>Listen with <span className={styles.specialText}>vexirale :D</span></div>
    </div>
  )
}

export default Header
