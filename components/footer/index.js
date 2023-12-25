import Menu from "../menu";
import withAuth from "../with-auth";
import styles from './styles.module.css'

function Footer() {
  return (
    // <div className={styles.footer}>
    <div className="text-3xl font-bold text-center bg-blue-300 py-3 text-white">
      <p>Footer</p>
    </div>
  )
}

export default withAuth(Footer);