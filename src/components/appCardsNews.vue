<template>
    <section
            @click="showNews = !showNews"
            class="news-card flex-row">
        <img :src="newsImg" :alt="titleNews">
        <div class="news-title flex-column">
            <h3>{{ titleNews }}</h3>
            <span v-html="summary"></span>
            <p>Автор публикации: {{ author }}</p>
            <p class="date-news">{{ dateNews }}</p>
        </div>
    </section>

    <transition name="fade-background">
        <div v-if="showNews" class="background-hidden"></div>
    </transition>

    <transition name="fade-card">
        <section v-if="showNews" class="hidden-news-card flex-row">
            <button @click="showNews = !showNews" class="btn">X</button>
            <div class="news-title flex-column">
                <h3>{{ titleNews }}</h3>
                <span class="news-text" v-html="textNews"></span>
                <p>Автор публикации: {{ author }}</p>
                <p class="date-news">{{ dateNews }}</p>
            </div>
        </section>
    </transition>

</template>

<script>
    export default {
        data() {
            return {
                showNews: false
            }
        },
        props: {
            newsImg: String,
            dateNews: String,
            titleNews: String,
            summary: String,
            textNews: String,
            author: String
        },
        watch: {
            showNews() {
                if (this.showNews) {
                    document.body.classList.add('modal-open')
                } else {
                    document.body.classList.remove('modal-open')
                }
            }
        },
        computed: {

        },
        name: "appCardsNews"
    }
</script>

<style scoped>
    .news-card {
        margin: 2rem 1rem;
        padding: 1rem;
        justify-content: space-between;
        flex-wrap: nowrap;
        background-color: white;
        border-radius: 20px;
        box-shadow: 1px 10px 20px 0 rgba(0,0,0,0.3);
    }

    .news-card:hover {
        -webkit-transition: all 0.3s ease;;
        -moz-transition: all 0.3s ease;;
        -o-transition: all 0.3s ease;;
        transition: all 0.3s ease;
        background-color: #FFFCE5;
        cursor: pointer;
    }

    .news-card img {
        max-width: 18rem;
        border-radius: 15px;
    }
    .news-title {
        align-items: flex-start;
        margin: 0;
        padding: 0 2rem;
        height: 100%;
    }
        .news-title h3 {
            padding: 0;
            text-align: left;
        }
        .news-title p, .news-title span {
            text-align: left;
            font-size: 18px;
            max-width: 100%;
        }
        .news-title .date-news p {
            font-weight: lighter;
        }
    .background-hidden {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(69, 69, 69, 0.9);
        z-index: 1;
    }
    .hidden-news-card {
        position: fixed;
        top: 6rem;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
        margin: 3rem 2rem;
        padding: 1rem;
        justify-content: space-between;
        flex-wrap: nowrap;
        background-color: white;
        border-radius: 20px;
        box-shadow: 1px 10px 20px 0 rgba(0,0,0,0.3);
    }
    .hidden-news-card img {
        max-width: 18rem;
        border-radius: 15px;
    }
    .hidden-news-card .btn {
        margin: 0.5rem;
        padding: 1rem 1.3rem;
        font-weight: bolder;
        position: absolute;
        top: 0;
        right: 0;
        font-size: 1rem;
        border-radius: 100%;
    }
    .news-text {
        height: 35rem;
        overflow: auto;
    }

    .fade-card-enter-active {
        animation: fade-card-in .3s;
    }
    .fade-card-leave-active {
        animation: fade-card-in .3s reverse;
    }
    @keyframes fade-card-in {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }

    .fade-background-enter-active {
        animation: fade-background-in .3s;
    }
    .fade-background-leave-active {
        animation: fade-background-in .3s reverse;
    }
    @keyframes fade-background-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @media (max-width : 750px) {
        .news-card {
            align-items: center;
            flex-direction: column;
            padding: 1rem 0 0 0;
        }
        .btn {
            margin: 0.5rem;
            padding:1rem 1.5rem;
        }
        .hidden-news-card {
            flex-direction: column;
            margin: 1.5rem 1rem;
            padding: 1rem 0 0 0;
        }
        .hidden-news-card img {
            margin-top: 1rem;
        }
    }
</style>