<template>
    <footer class="flex-row">
        <div class="flex-column">
            <h2>Наши контакты</h2>
            <div class="telephones">
                <a href="tel:+78007001355">+7 (800) 700-13-55</a>
                <br>
                <a href="tel:+79157753050">+7 (915) 775-30-50</a>
            </div>
            <h4><a href="mailto:info@italiamo.online">info@italiamo.online</a></h4>
            <h4>Дизайн: <a href="mailto:adelina.sinitsyna@mail.ru">adelina.sinitsyna@mail.ru</a></h4>
            <h4>Вёрстка: <a href="mailto:bexram33@mail.ru">bexram33@mail.ru</a></h4>
        </div>
        <div class="flex-column center-column">
            <h2>Подписывайтесь на нас в соцсетях!</h2>
            <span>
                <img src="../img/insta-logo.png" alt="instagram logo">
                <img src="../img/vk-logo.png" alt="instagram logo">
            </span>
        </div>
        <div class="flex-column">
            <h5>ОГРНИП</h5>
            <h5>320332800003572</h5>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "appFooter"
    }
</script>

<style scoped>
    footer {
        background-color: #E9BB91;
        box-shadow: 0 1rem 2rem 1rem rgba(0,0,0,0.2);
    }

    .flex-row {
        justify-content: space-between;
        align-items: flex-start;
    }

    .flex-column {
        padding: 1rem;
    }

    .flex-column:first-child {
        align-items: flex-start;
    }

    .flex-row:last-child {
        align-items: flex-end;
    }

    .center-column {
        align-self: flex-start;
        width: 25rem;
    }

    .telephones {
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        letter-spacing: 0.05em;
        margin: 1rem 0;
    }

    img {
        width: 2rem;
        height: 2rem;
        margin: 0 2rem;
    }

    img:hover {
        cursor: pointer;
    }

    h2 {
        font-size: 28px;
        margin: 0 0 1rem 0;
    }

    h4 {
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        letter-spacing: 0.05em;
        margin: 0.5rem 0;
    }

    h5 {
        margin: 0.1rem;
        font-size: 18px;
        line-height: 23px;
        text-align: center;
        letter-spacing: 0.05em;
    }
</style>