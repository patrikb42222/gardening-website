<template>
    <div class="outside">
        <h2><slot>BUTTON</slot></h2>
    </div>
</template>

<style scoped>
    .outside {
        box-sizing: border-box;
        display: inline-block;
        padding: var(--padding, 0.5rem 1rem);
        background-color: var(--background-color, transparent);
        border: var(--border, none);
        border-radius: var(--border-radius, 0);
        color: var(--color, white);
        font-family: var(--font-family, 'Julius Sans One', sans-serif);
    }
    h2 {
        font-size: var(--font-size, 1.5rem);
        font-weight: var(--font-weight, 600);
        display: inline-block;
    }

    .outside:hover {
        cursor: pointer;
        color: var(--hover-color, #F45800);
        background: var(--hover-background, transparent);
        border-color: var(--hover-border-color, transparent);
    }
</style>