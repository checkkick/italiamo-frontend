<template>
    <div class="card-comment flex-row">
        <img :src="commentImg" :alt="authorName + ' image'">
        <div class="comment-body">
            <p class="author-name">{{ authorName }}</p>
            <p class="comment-text">{{ commentText }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            commentImg: String,
            authorName: String,
            authorCity: String,
            commentText: String
        },
        name: "appCardsComments"
    }
</script>

<style scoped>
    .card-comment {
        margin: 1rem 2rem 4rem 2rem;
        padding: 1rem;
        justify-content: stretch;
        flex-wrap: nowrap;
        background-color: rgba(255,255,255,0.9);
        border-radius: 20px;
        box-shadow: 0 0 15px 25px rgba(255,255,255,0.9);
    }

    .card-comment img {
        object-fit: cover;
        object-position: 50% 50%;
        align-self: flex-start;
        margin: 1rem;
        width: 200px;
        height: 200px;
        border-radius: 10rem;
    }

    .comment-body {
        padding: 1rem;
        width: 100%;
    }

    .comment-body p {
        max-width: 100%;
    }

    .author-name {
        text-align: left;
        font-weight: bold;
        font-size: 1.5rem;
    }

    .author-city {
        text-align: left;
        font-size: 1.1rem;
        color: rgba(0,0,0, 0.4);
    }

    .comment-text {
        text-align: left;
    }

    @media (max-width : 650px) {
        .card-comment {
            flex-direction: column;
        }
        .card-comment img {
            margin: 0;
            position: absolute;
            left: 2rem;
            width: 100px;
            height: 100px;
        }
        .author-name {
            text-align: right;
            margin-right: 0.5rem;
        }
        .author-city {
            text-align: right;
            margin-right: 0.5rem;
        }
    }
</style>