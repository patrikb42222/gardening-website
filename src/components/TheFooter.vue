<template>
    <footer>
        <section>
            <div>
                <h3>SITEMAP</h3>
                <div>
                    <h4>Home</h4>
                    <h4>About</h4>
                    <h4>Portfolio</h4>
                    <h4>Contact</h4>
                </div>
            </div>
            <div>
                <h3>CONTACT</h3>
                <div>
                    <h4>Email: john@doe.com</h4>
                    <h4>Phone: +36 00 000 0000</h4>
                </div>
            </div>
            <div>
                <h3>PRIVACY</h3>
                <div>
                    <h4>Privacy</h4>
                </div>
            </div>
        </section>
        <h4 id="copyright">© 2024 All Rights Reserved | John Doe | Website by Bede Patrik</h4>
    </footer>
</template>

<style scoped>
    h3 {
        font-family: Poppins, sans-serif;
    }

    h4 {
        font-family: 'Pontano Sans', sans-serif; 
        font-weight: 100;
        line-height: 0.5rem;
    }

    footer {
        margin-top: auto;

        color: white;
        background: black;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

    #copyright {
        text-align: center;
    }

    section{

        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-top: auto;
    }
</style>