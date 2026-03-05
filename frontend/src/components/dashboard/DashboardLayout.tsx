import Sidebar from "../layout/Sidebar"
import TopNavbar from "../layout/TopNavbar"
import styles from './DashboardLayout.module.css'

export default function DashboardLayout({ children }: any) {
  return (
    <div className={styles.container}>
      <Sidebar/>
      <div className={styles.main}>
        <TopNavbar/>
        <main className={styles.content}>
          {children}
        </main>
      </div>
    </div>
  )
}