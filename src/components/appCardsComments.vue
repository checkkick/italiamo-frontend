<template>
    <div class="card-comment flex-row">
        <img :src="commentPathImage" :alt="authorName + ' image'">
        <div class="comment-body">
            <p class="author-name">{{ authorName }}</p>
            <p class="author-city">{{ authorCity }}</p>
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
        computed: {
            commentPathImage() {
                if (!this.commentImg) {
                    return
                }
                const fileName = this.commentImg.toLowerCase();
                return require(`../assets/${fileName}.png`);
            }
        },
        name: "appCardsComments"
    }
</script>

<style scoped>
    .card-comment {
        margin: 2rem 1rem;
        padding: 1rem;
        justify-content: stretch;
        flex-wrap: nowrap;
        background-color: white;
        border-radius: 20px;
        box-shadow: 1px 10px 20px 0 rgba(0,0,0,0.3);
    }

    .card-comment img {
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