<template>
    <div class="background">
        <img src="../../assets/geometry-1.svg" class="background-fixed" id="geo-1">
    </div>
    <div>
        <BaseTitle id="title">OUR SERVICES</BaseTitle>
        <section class="image" id="img-1">
            <h1>AUTONOMOUS LAWNMOWERS</h1>
        </section>
        <section>
            <h2>We install navigation grids for self driving lawnmowers. We also provide hand-drawn schematics on how the layout is going to be, to make sure we don’t make any mistakes, or interfere with other garden systems</h2>
        </section>
        <section class="image" id="img-2">
            <h1>WELL DIGGING</h1>
        </section>
        <section>
            <h2>We install navigation grids for self driving lawnmowers. We also provide hand-drawn schematics on how the layout is going to be, to make sure we don’t make any mistakes, or interfere with other garden systems</h2>
        </section>
        <section class="image" id="img-3">
            <h1>SPRINKLER SYSTEMS</h1>
        </section>
        <section>
            <h2>We install navigation grids for self driving lawnmowers. We also provide hand-drawn schematics on how the layout is going to be, to make sure we don’t make any mistakes, or interfere with other garden systems</h2>
        </section>
    </div>
</template>

<style scoped>
#geo-1 {
    width: 100rem;
    top: 20rem;
    left: 10rem;
    opacity: 0.5;
}
#title {
    margin: 2rem 0rem 10rem 0rem;
}

#img-1 {
    background-image: url("../../assets/lawnmower-1.jpg");
    
    background-position: 50% 50%;
}
#img-2 {
    background-image: url("../../assets/well-1.jpeg");
    
    background-position: 50% 50%;
}
#img-3 {
    background-image: url("../../assets/sprinkler-2.jpg");
    
    background-position: 50% 50%;
}

h1 {
    text-align: center;
    color: white;
    font-size: 5rem;
    font-family: Roboto, sans-serif;
}

h2 {
    text-align: center;
    color: white;
    font-size: 1.5rem;
    font-family: Roboto, sans-serif;
    max-width: 80%;
}

section.image {
    border-top: 10px solid white;
    border-bottom: 10px solid white;
    overflow: hidden;
    background-attachment: fixed;
    background-size: cover;
}
section {
    height: 20rem;

    display: flex;
    justify-content: center;
    align-items: center;
}
</style>