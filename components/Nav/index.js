import Link from "next/link";

export default function Nav () {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                        <Link href="/">
                            <a>Inicio</a>
                        </Link>
                        </li>
                        <li>
                        <Link href="/timeline">
                            <a>Timeline</a>
                        </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <style jsx>{
                `
                nav {
                    width: 100%;
                    position: fixed;
                    background: #0070f3;
                  }
                  nav ul {
                    width: 100%;
                    justify-content: center;
                    list-style-type: none;
                    display: flex;
                    margin: 0 auto;
                    padding: 18px 0;
                  }
                  nav li {
                    padding: 0 18px;
                    color: #fff;
                  }
                    `
            }</style>
        </>
    )

}