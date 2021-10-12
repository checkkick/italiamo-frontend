<template>
    <div class="flex-column teacher-card">
        <img :src="image" :alt="pageId">
        <p>{{ name }}</p>
        <button class="btn">Познакомиться</button>
    </div>
</template>

<script>
    export default {
        props: {
            name: String,
            pageId: String,
            image: String
        },
    }
</script>

<style scoped>
    .teacher-card {
        margin: 2rem 1rem;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;
        background-color: white;
        border-radius: 20px;
        box-shadow: 1px 10px 20px 0 rgba(0,0,0,0.3);
    }
        .teacher-card:hover {
            -webkit-transition: all 0.3s ease;;
            -moz-transition: all 0.3s ease;;
            -o-transition: all 0.3s ease;;
            transition: all 0.3s ease;
            background-color: rgba(255, 252, 229, 0.9);
            cursor: pointer;
        }
        .teacher-card img {
            margin: 2rem;
            border-radius: 10px;
            width: 206px;
            height: 191px;
        }
    @media (max-width: 650px) {
        .teacher-card {
            padding: 1rem;
            margin: 2rem 1rem;
            justify-content: center;
            align-items: center;
            text-align: center;
            width: 100%;
            background-color: white;
            border-radius: 20px;
            box-shadow: 1px 10px 20px 0 rgba(0,0,0,0.3);
        }
            .teacher-card img {
                margin: 0;
                border-radius: 10px;
                width: 100%;
                height: auto;
            }
            .teacher-card .btn {
                margin: 0;
                font-family: 'Poiret One', serif, sans-serif;
                font-weight: normal;
                font-size: 18px;
                border-radius: 99px;
                letter-spacing: 0.08em;
                border: none;
                width: 100%;
                max-width: none;
                padding: 1rem 1rem;
                background: rgba(233, 187, 145, 0.98);
                transition: all 0.22s;
                box-shadow: 1px 2px 10px 0 rgba(0, 0, 0, 0.2);
             }

    }
</style>