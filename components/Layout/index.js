export default function Layout ({children}) {
    return (
        <>
            <main>
                {children}
            </main>
            <style jsx global>{
                `
                html,
                body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                }

                main {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    height: 100vh;
                    padding: 48px 24px;
                }
                
                a {
                color: inherit;
                text-decoration: none;
                }
                
                * {
                box-sizing: border-box;
                }
                
                @media (prefers-color-scheme: dark) {
                html {
                    color-scheme: dark;
                }
                body {
                    color: white;
                    background: black;
                }
                }
                    `
                

            }</style>
        </>
    )

}