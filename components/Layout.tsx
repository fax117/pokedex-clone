import React from "react"
import styles from '@/styles/Home.module.css'

function Layout({children}: {children: React.ReactNode}){
    return (
        <div>
            <nav className={styles.nav_container}>
                <h1 className={styles.nav_h1}>Pokédex</h1>
            </nav>
            {children}
        </div>
    )
}

export default Layout