<template>
<section>
    <div class="main">
        <div class="col">
            <img src="../../assets/lawnmower-1.jpg">
            <img src="../../assets/sprinkler-2.jpg">
            <img src="../../assets/well-1.jpeg">
        </div>
        <div class="col">
            <img src="../../assets/gardener-1.jpg">
            <img src="../../assets/sprinkler-1.jpg">
            <img src="../../assets/gardener-1.jpg">
        </div>
    </div>
</section>
</template>

<style scoped>
img {
    width: 100%;
    margin: 2rem;
}
.main {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
}
section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
}
.col {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    margin: 2rem;
}
</style>