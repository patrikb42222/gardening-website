<template>
    <div class="background">
        <img src="../../assets/geometry-1.svg" class="background-element" id="geo-1">
    </div>
    <div id="content">
        <BaseTitle id="title">CONTACT</BaseTitle>
        <div id="grow"></div>
        <section id="contact-details">
            <div id="contacts">
                <h2><b>EMAIL: </b>john@doe.com</h2>
                <h2><b>PHONE: +36 00 000 0000</b></h2>
            </div>
        </section>
    </div>
</template>

<style scoped>
#swoosh-1 {
    width: 100%;
    right: 0;
    top: 25%;
}
#geo-1 {
    width: 60rem;
    left: -20%;
    opacity: 0.5;
    overflow: hidden;
}

#grow {
    flex-grow: 1;
}
#content {
    flex-grow: 1;
    display: flex;
    flex-direction: column
}

#title {
    flex-grow: 1;
}
h1 {
    font-size: 4rem;
    color: white;
}

#contact-details {
    background-image: url('../../assets/swoosh-1.svg');
    background-size: cover;

    position: relative;
}
#contacts {
    box-sizing: content-box;

    background-image: url('../../assets/slash-background.svg');
    background-size: cover;
    background-position: right;

    border-radius: 2rem;
    border: 10px solid #ff8138;
    filter: drop-shadow(1rem 1rem 0rem rgba(0, 0, 0, 0.542));
    padding: 2rem;
    position: absolute;
    bottom: 10%;
    right: 20%;
}
h2 {
    color: #000000;
    font-size: 1.5rem;
    text-align: right;
    font-family: Roboto, sans-serif;
}




section {
    height: 20rem;
}
</style>