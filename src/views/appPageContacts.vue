<template>
    <header class="header flex-column">
        <h1>Наши контакты</h1>
        <h3>Заполните форму и мы свяжемся с Вами!</h3>
    </header>
    <section class="flex-row">
        <div class="flex-column contacts-text">
            <div class="telephones">
                <h4><a href="tel:+78007001355">+7 (800) 700-13-55</a></h4>
                <h4><a href="tel:+79157753050">+7 (915) 775-30-50</a></h4>
                <h4><a href="mailto:info@italiamo.online">info@italiamo.online</a></h4>
                <h4>Разработка: <a href="mailto:bexram33@mail.ru">bexram33@mail.ru</a></h4>
            </div>
            <div class="about-us">
                <h4>ОГРНИП 320332800003572</h4>
                <h4>Italiamo, ©2020—2021</h4>
                <span class="flex-row">
                    <img src="../assets/insta-logo.png" alt="instagram logo">
                    <img src="../assets/vk-logo.png" alt="instagram logo">
                </span>
            </div>
        </div>
        <form class="form" action="">
            <div class="flex-column contacts-form">
                <input class="input" type="text" placeholder="Номер телефона или почта">
                <input class="input" type="text" placeholder="Как к вам обращаться?">
                <textarea
                        class="textarea"
                        name="contact-area"
                        id="contact-comment"
                        placeholder="Комментарий"
                ></textarea>
                <button class="btn">Отправить</button>
            </div>
        </form>
    </section>
</template>

<script>
    export default {
        name: "appPageContacts"
    }
</script>

<style scoped>
    .flex-row {
        align-items: stretch;
    }
    .contacts-text {
        justify-content: space-between;
    }
    .telephones h4 {
        margin: 1rem 0;
    }
    .about-us h4 {
        font-size: 1.2rem;
        margin: 0.5rem;
    }
    .about-us img {
        cursor: pointer;
        width: 3rem;
        margin: 2rem;
    }
    .about-us .flex-row {
        justify-content: center;
    }
</style>