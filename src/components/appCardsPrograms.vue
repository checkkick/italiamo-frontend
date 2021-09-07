<template>
        <section class="card">
            <div class="front"
                 :style="{ background: `url(${pathToImage}) no-repeat center / 100% 100%` }"
            >
                <p>{{ titleText }}</p>
            </div>
            <div class="back"><p>{{ aboutText }}</p></div>
        </section>


</template>

<script>
    export default {
        props: {
          image: String,
          titleText: String,
          aboutText: String
        },
        name: "appCardsPrograms",
        computed: {
            pathToImage() {
                if (!this.image) {
                    return
                }
                const fileName = this.image.toLowerCase();
                return require(`../assets/${fileName}.png`);
            }
        }
    }
</script>

<style scoped>
    .card {
        width: 25rem;
        height: 25rem;
        position: relative;
        perspective: 40rem;
        cursor: pointer;
    }
    .front, .back {
        position: absolute;
        width: 25rem;
        height: 25rem;
        left: 0;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 1s;
        backface-visibility: hidden;
        background-color: rgba(255,255,255,0.9);
        border-radius: 15px;
    }
    .front {
        width: 25rem;
        height: 25rem;
        border-radius: 15px;
    }
    .front p {
        width: 100%;
        background: rgba(255, 255, 255, 0.7);
        padding: 0.7rem;
    }
    .back {
        transform: rotateY(180deg);
    }
    .back p {
        font-size: 18px;
        line-height: 20px;
        padding: 1rem;
        width: 100%;
    }
    .card:hover .front {
        transform: rotateY(180deg);}
    .card:hover .back {
        transform: rotateY(360deg);}
</style>