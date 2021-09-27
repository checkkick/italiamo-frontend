<template>
    <div class="flex-column teacher-card">
        <img :src="image" :alt="pageId">
        <p>{{ name }}</p>
        <div><p class="text">{{text}}</p></div>
        <button class="btn">Посмотреть отзывы</button>
    </div>
</template>

<script>
    export default {
        props: {
            name: String,
            pageId: String,
            image: String,
            text: String
        },
    }
</script>

<style scoped>
    .text {
        height: 75px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    .teacher-card {
        margin: 1rem;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 50rem;
        background-color: white;
        border-radius: 20px;
        box-shadow: 1px 10px 20px 0 rgba(0,0,0,0.3);
    }

    .teacher-card:hover {
        -webkit-transition: all 0.3s ease;;
        -moz-transition: all 0.3s ease;;
        -o-transition: all 0.3s ease;;
        transition: all 0.3s ease;
        transform: scale(1.03);
        background-color: #FFFCE5;
        cursor: pointer;
    }

    .teacher-card img {
        object-fit: cover;
        object-position: 50% 50%;
        margin: 2rem;
        border-radius: 10px;
        width: 150px;
        height: 150px;
    }
</style>