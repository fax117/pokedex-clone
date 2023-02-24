import React from "react"
import styles from '@/styles/Home.module.css'
import Link from "next/link"

function Layout({children}: {children: React.ReactNode}){
    return (
        <div>
            <nav className={styles.nav_container}>
                <Link href={"/"}>
                    <h1 className={styles.nav_h1}>Pokédex</h1>
                </Link>
            </nav>
            {children}
        </div>
    )
}

export default Layout