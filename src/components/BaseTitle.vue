<template>
    <section>
        <div>
            <h1><slot></slot></h1>
        </div>
    </section>
</template>

<style scoped>
section {
    height: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

div {
    background-color: white;
    padding: 0rem 6rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
}

h1 {
    text-align: center;
    font-family: Roboto;
    font-size: 4rem;
    font-weight: 900;
}
</style>