<template>
    <div v-if="showNews" class="background-hidden"></div>
    <section
            @click="showNews = !showNews"
            class="news-card flex-row">
        <img :src="newsImg" :alt="titleNews">
        <div class="news-title flex-column">
            <h3>{{ titleNews }}</h3>
            <p>{{ summary }}</p>
            <p>Автор публикации: {{ author }}</p>
            <p class="date-news">{{ dateNews }}</p>
        </div>
    </section>
    <section v-if="showNews" class="hidden-news-card flex-row">
        <button @click="showNews = !showNews" class="btn">X</button>
        <img :src="newsImg" :alt="titleNews">
        <div class="news-title flex-column">
            <h3>{{ titleNews }}</h3>
            <p class="news-text">{{ textNews }}</p>
            <p>Автор публикации: {{ author }}</p>
            <p class="date-news">{{ dateNews }}</p>
        </div>
    </section>
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
    }

    .news-title p {
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
        background-color: rgba(0,0,0,0.9);
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
        font-weight: bolder;
        position: absolute;
        top: 0;
        right: 0;
    }

    .news-text {
        height: 35rem;
        overflow: auto;
    }

    @media (max-width : 750px) {
        img {
            display: none;
        }
        .news-card {
            padding: 0;
        }
        .btn {
            margin: 0.5rem;
            padding:1rem 1.5rem;
        }
        .hidden-news-card {
            margin: 1.5rem 1rem;
            padding: 0;
        }
        .news-text {
            max-height: 20rem;
            overflow: auto;
        }
    }
</style>