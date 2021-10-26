<template>
    <div class="flex-column teacher-card">
        <div class="flex-column teacher-image">
            <img :src="image" :alt="pageId">
        </div>
        <p>{{ name }}</p>
        <button @click="routerPush(`teachers/${pageId}`)" class="btn">Познакомиться</button>
    </div>
</template>

<script>
    export default {
        props: {
            name: String,
            pageId: String,
            image: String
        },
        methods: {
            routerPush(path) {
                window.scrollTo(0, 0);
                this.$router.push(`/${path}`)
            },
        }
    }
</script>

<style scoped>
    .teacher-card {
        position: relative;
        margin: 1rem;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        width: 30%;
        height: 30rem;
        flex-grow: 1;
        background-color: white;
        border-radius: 20px;
        box-shadow: 1px 7px 10px 0 rgba(0,0,0,0.3);
    }
        .teacher-card:hover {
            -webkit-transition: all 0.3s ease;;
            -moz-transition: all 0.3s ease;;
            -o-transition: all 0.3s ease;;
            transition: all 0.3s ease;
            background-color: rgba(255, 252, 229, 0.9);
        }
    .teacher-image {
        margin: 0 2rem;
        height: 100%;
        align-items: center;
    }
        .teacher-image img {
            margin: 0;
            object-fit: cover;
            object-position: 50% 50%;
            align-self: flex-start;
            width: 12rem;
            height: 12rem;
            border-radius: 100%;
        }
    @media (max-width: 650px) {
        .teacher-card {
            padding: 2rem 1rem;
            margin: 1rem;
            justify-content: space-between;
            align-items: center;
            text-align: center;
            width: auto;
            height: 25rem;
            background-color: white;
        }
        .teacher-image {
            margin: 0;
            height: 100%;
            align-items: center;
        }
            .teacher-card .btn {
                margin: 0;
                font-family: 'Poiret One', serif, sans-serif;
                font-weight: normal;
                font-size: 18px;
                border-radius: 99px;
                letter-spacing: 0.08em;
                border: none;
                width: 90%;
                max-width: none;
                padding: 1rem 1rem;
                background: rgba(233, 187, 145, 0.98);
                transition: all 0.22s;
                box-shadow: 1px 2px 10px 0 rgba(0, 0, 0, 0.2);
             }

    }
</style>