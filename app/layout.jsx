import "../src/styles/sass/app.scss"
import styles from "../src/styles/modules/App.module.css"
import Link from "next/link"
import RootStyleRegistry from "./RootStyleRegistry"

export default function RootLayout({ children }){
    return (
        <html lang="en">
            <body>
                <nav className={styles.navbar}>
                    <ul className={styles.list}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/shop">Shop</Link></li>
                    </ul>
                </nav>
                
                <RootStyleRegistry>
                    <main className={styles.main}>
                        {children}
                    </main>
                </RootStyleRegistry>
            </body>
        </html>
    )
}