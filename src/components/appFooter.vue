<template>
    <footer id="contacts" class="footer flex-column">
        <h2>Наши контакты</h2>
        <h3>Заполните форму и мы свяжемся с Вами!</h3>
        <section class="flex-row flex-contacts">
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
                    <textarea v-model="footercomment"
                            class="textarea"
                            name="contact-area"
                            id="contact-comment"
                            placeholder="Комментарий"
                    ></textarea>
                    <button class="btn">Отправить</button>
                </div>
            </form>
        </section>
    </footer>
</template>

<script>
    export default {
        data() {
            return {
                footercomment: this.comment
            };
        },
        props: {
            comment: String,
        },
        name: "appFooter"
    }
</script>

<style scoped>
    .footer {
        margin: 2rem 0 0 0;
        padding: 2rem 0 0 0;
        background-color: rgba(255, 252, 230, 0.6);
        box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.3);
    }
    .footer h2, .footer h3 {
        margin: 0 0 2rem 0;
        align-self: center;
    }
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
    .contacts-form, .contacts-text {
        margin: 0;
    }
    @media (max-width: 650px) {
        .flex-contacts {
            flex-direction: column-reverse;
        }
        .contacts-text {
            margin: 0;
        }
    }
</style>