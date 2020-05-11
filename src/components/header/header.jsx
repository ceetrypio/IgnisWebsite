import React from "react"
import styles from "./header.module.scss"

const Header = () => {
return (<header className={styles.header}>
<div className={styles.header_logo}>
<h4 className={styles.header_logo_text}>Ignis Brothers</h4>
</div>

<div className={styles.header_navigation}>
<a>BIO</a>
<a>TICKETS</a>
<a>ABOUT US</a>
<button> BOOK NOW</button>
</div>

</header>)
}


export default Header