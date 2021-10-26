<template>
        <section class="card" >
            <div class="front"
                 :style="{background: `url(${image}) no-repeat center / cover`}">
                <p>{{ titleText }}</p>
                <button @click="routerPush(href)" class="mobile btn">Подробнее</button>
            </div>
            <div class="back">
                <div><p  class="back-text">{{ aboutText }}</p></div>
                <p @click="routerPush(href)" class="btn">Подробнее</p>
            </div>
        </section>


</template>

<script>
    export default {
        props: {
          href: String,
          image: String,
          titleText: String,
          aboutText: String
        },
        name: "appCardsPrograms",
        methods: {
            routerPush(course) {
                window.scrollTo(0,0);
                this.$router.push(`/programs/${course}`)
            }
        },
    }
</script>

<style scoped>
    .card {
        width: 30rem;
        height: 30rem;
        position: relative;
        perspective: 45rem;
        cursor: pointer;
        margin: 1rem;
    }
    .front, .back {
        position: absolute;
        width: 30rem;
        height: 30rem;
        margin: 0;
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        align-items: center;
        transition: 1s;
        backface-visibility: hidden;
        background-color: rgba(255,255,255,0.9);
        border-radius: 15px;
    }
        .back .btn {
            box-shadow: none;
            max-width: none;
            width: 80%;
            margin: 1rem 0;
        }
        .front p {
            margin: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.7);
            padding: 1rem 0;
        }
        .front .mobile.btn {
            display: none;
        }
    .back {
        transform: rotateY(180deg);
    }
        .back p {
            font-size: 18px;
            line-height: 20px;
            width: auto;
            margin: 0;
            padding: 2rem 1rem;
        }
    .back-text {
        max-height: 10.5rem;
        display: -webkit-box;
        -webkit-line-clamp: 10;
        -webkit-box-orient: vertical;  
        overflow: hidden;
    }
    .card:hover .front {
        transform: rotateY(180deg);
    }
    .card:hover .back {
        transform: rotateY(360deg);
    }
    @media (max-width : 650px) {
        .card {
            width: 21rem;
            height: 21rem;
            perspective: 30rem;
        }
        .front, .back {
            width: 21rem;
            height: 21rem;
        }
            .front {
                justify-content: space-between;
            }
            .front p {
                margin: 2rem 0 0;
            }
            .front .mobile.btn {
                display: block;
                max-width: none;
                width: 80%;
            }
        .back {
            display: none;
        }
        .card:hover .front,
        .card:hover .back,
        .front.rotate,
        .back.rotate {
            transform: none;
        }
    }
</style>