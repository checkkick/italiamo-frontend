<template>
    <header class="header flex-column">
        <h1>Оплата</h1>
    </header>
    <main class="main flex-column">
        <section class="about-payment card-shadow">
            <p>Оплатить занятия итальянским языком вы можете прямо на этой странице банковской картой любого банка в любой валюте. Платеж будет списан в рублях РФ.</p>
            <p>Данные вашей карты не вводятся и не хранятся на нашем сайте. После нажатия кнопки «оплатить» вы будете перенаправлены на платежную страницу «Сбербанк» для ввода данных карты и проведения оплаты. Все платежи осуществляются по защищенной технологии HTTPS с применением механизма двухфакторной аутентификации 3D secure.</p>
            <p>Оплата происходит через ПАО СБЕРБАНК с использованием банковских карт следующих платёжных систем:</p>
            <ul>
                <li>МИР;</li>
                <li>VISA International;</li>
                <li>Mastercard Worldwide.</li>
            </ul>
            <p>Нажимая на кнопку "оплатить" вы принимаете условия <router-link class="link" @click="scrollToTop" to="/oferta">Договора-оферты</router-link>.</p>
            <p>В случае неисполнения или ненадлежащего оказания услуг, а также в случае, если договор расторгается по вашему желанию, вы можете предоставить нам мотивированный отказ от услуг. В этом случае мы возвращаем денежные средства в размере, равном сумме не исполненных обязательств, за удержанием суммы комиссий перевода денежных средств. Срок возврата денежных средств составляет до 30 календарных дней.</p>
        </section>
        <section class="prices flex-row">
            <div class="price-card">
                <div class="price-card-title">
                    <h3>8 занятий в мини-группе из 4 человек</h3>
                    <h3>5360 р.</h3>
                </div>
                <h4>Цена указана за 8 занятий по 60 минут</h4>
                <div class="price-card-text"> 
                    <p>занятия с преподавателями (один урок - 60 мин)</p>
                    <p>доступ в виртуальный класс с учебными материалами</p>
                    <p>задания для закрепления материалов каждого занятия</p>
                    <a onclick="ipayCheckout({
    amount:5360,
    currency:'RUB',
    order_number:'',
    description: '8 занятий в мини-группе из 4 человек'},
    function(order) { showSuccessfulPurchase(order) },
    function(order) { showFailurefulPurchase(order) })">
                        <button class="btn">Оплата</button>
                    </a>
                </div>
            </div>
                <div class="price-card">
                    <div class="price-card-title">
                        <h3>8 занятий в мини-группе из 2 человек</h3>
                        <h3>8560 р.</h3>
                    </div>
                    <h4>Цена указана за 8 занятий по 60 минут</h4>
                    <div class="price-card-text"> 
                        <p>занятия с преподавателями (один урок - 60 мин)</p>
                        <p>доступ в виртуальный класс с учебными материалами</p>
                        <p>задания для закрепления материалов каждого занятия</p>
                        <a onclick="ipayCheckout({
    amount:8560,
    currency:'RUB',
    order_number:'',
    description: '8 занятий в мини-группе из 2 человек'},
    function(order) { showSuccessfulPurchase(order) },
    function(order) { showFailurefulPurchase(order) })">
                            <button class="btn">Оплата</button></a>
                    </div>
                </div>
                <div class="price-card">
                    <div class="price-card-title">
                        <h3>Индивидуальное занятие с русскоязычным преподавателем</h3>
                        <h3>1470 р.</h3>
                    </div>
                    <h4>Цена указана за 1 занятие по 60 минут</h4>
                    <div class="price-card-text">
                        <p>занятия с преподавателями (один урок - 60 мин)</p>
                        <p>доступ в виртуальный класс с учебными материалами</p>
                        <p>задания для закрепления материалов каждого занятия</p>
                        <a onclick="ipayCheckout({
    amount:1470,
    currency:'RUB',
    order_number:'',
    description: 'Индивидуальное занятие с русскоязычным преподавателем'},
    function(order) { showSuccessfulPurchase(order) },
    function(order) { showFailurefulPurchase(order) })">
                        <button class="btn">Оплата</button></a>
                    </div>
                </div>
                <div class="price-card">
                    <div class="price-card-title">
                        <h3>1 персональное занятие с Носителем языка</h3>
                        <h3>1970 р.</h3>
                    </div>
                    <h4>Цена указана за 24 часа</h4> 
                    <div class="price-card-text"> 
                        <p>занятия с преподавателями (один урок - 60 мин)</p>
                        <p>доступ в виртуальный класс с учебными материалами</p>
                        <p>задания для закрепления материалов каждого занятия</p>
                        <a onclick="ipayCheckout({
    amount:1970,
    currency:'RUB',
    order_number:'',
    description: '1 персональное занятие с Носителем языка'},
    function(order) { showSuccessfulPurchase(order) },
    function(order) { showFailurefulPurchase(order) })"><button class="btn">Оплата</button></a>
                    </div>
                </div>
                <div class="price-card">
                    <div class="price-card-title">
                        <h3>Подготовка к экзаменам А2</h3>
                        <h3>14700 р.</h3>
                    </div>
                    <h4>Цена указана за 16 часов</h4> 
                    <div class="price-card-text">
                        <p>занятия с преподавателями (один урок - 60 мин)</p>
                        <p>доступ в виртуальный класс с учебными материалами</p>
                        <p>задания для закрепления материалов каждого занятия</p>
                        <a onclick="ipayCheckout({
    amount:14700,
    currency:'RUB',
    order_number:'',
    description: 'Подготовка к экзаменам А2'},
    function(order) { showSuccessfulPurchase(order) },
    function(order) { showFailurefulPurchase(order) })"><button class="btn">Оплата</button></a>
                    </div>
                </div>
                <div class="price-card">
                    <div class="price-card-title">
                        <h3>Подготовка к экзаменам B1, B2, C1</h3>
                        <h3>19700 р.</h3>
                    </div>
                    <h4>Цена указана за 24 часа</h4> 
                    <div class="price-card-text">
                        <p>занятия с преподавателями (один урок - 60 мин)</p>
                        <p>доступ в виртуальный класс с учебными материалами</p>
                        <p>задания для закрепления материалов каждого занятия</p>
                        <a onclick="ipayCheckout({
    amount:19700,
    currency:'RUB',
    order_number:'',
    description: 'Подготовка к экзаменам B1, B2, C1'},
    function(order) { showSuccessfulPurchase(order) },
    function(order) { showFailurefulPurchase(order) })"><button class="btn">Оплата</button></a>
                    </div>
                </div>
        </section>
        <section class="about-garanty flex-row">
            <div class="garanty card-shadow">
                <img src="../assets/check.png" alt="check">
                <h4>Данные защищены</h4>
                <p>Настоящий сайт поддерживает 256-битное шифрование. Конфиденциальность сообщаемой персональной информации обеспечивается ПАО СБЕРБАНК. Введённая информация не будет предоставлена третьим лицам за исключением случаев, предусмотренных законодательством РФ. Проведение платежей по банковским картам осуществляется в строгом соответствии с требованиями платёжных систем МИР, Visa Int., MasterCard Europe Sprl, JCB.</p>
            </div>
            <div class="garanty card-shadow">
                <img src="../assets/check.png" alt="check">
                <h4>Гарантия безопасности</h4>
                <p>Для оплаты (ввода реквизитов Вашей карты) Вы будете перенаправлены на платёжный шлюз ПАО СБЕРБАНК. Соединение с платёжным шлюзом и передача информации осуществляется в защищённом режиме с использованием протокола шифрования SSL. В случае если Ваш банк поддерживает технологию безопасного проведения интернет-платежей Verified By Visa, MasterCard SecureCode, MIR Accept, J-Secure для проведения платежа также может потребоваться ввод специального пароля.</p>
            </div>
            <div class="garanty card-shadow">
                <img src="../assets/check.png" alt="check">
                <h4>Мы на связи</h4>
                <p>Мы ответим на любые вопросы, касающиеся оплаты, проведения занятий или расписания уроков. Свяжитесь с нами по тел. +79157753050 или заполните форму ниже, и мы вам перезвоним.</p>
            </div>
        </section>
    </main>
</template>

<script>
    import { useHead } from '@vueuse/head'
    export default {
        setup() {

            useHead({
                meta: [
                    {
                        name: `viewport`,
                        content: 'width=device-width',
                    },
                ],

            })
        },



        methods: {
            scrollToTop() {
                window.scrollTo(0,0)
            }
        },
        name: "appPagePayment",
    }
</script>

<style scoped>
    .about-payment {
        padding: 1rem 2rem;
        text-align: justify;
        margin: 0 1rem;
    }
        .about-payment ul {
            margin: 0;
            padding: 0;
        }
        .about-payment li {
            font-family: 'Istok Web', cursive;
            font-style: normal;
            font-weight: lighter;
            font-size: 20px;
            line-height: 24px;
            letter-spacing: 0.03em;
        }
    .link {
        text-decoration: underline;
    }
    .prices {
        margin: 1rem;
        justify-content: space-evenly;
        gap: 1rem 1rem;
        align-items: stretch;
    }
    .price-card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 29rem;
        flex-grow: 1;
        border-radius: 15px;
        background-color: rgba(255,255,255,0.8);
        box-shadow: 1px 10px 20px 0 rgba(0,0,0,0.1);
    }
    .price-card h4 {
        margin: 1rem;
    }
        .price-card-title {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            max-height: 16rem;
            flex-grow: 1;
            padding: 1rem 2rem;
            border-radius: 15px;
            background-color: rgba(233,187,145,0.75);
        }
        .price-card-text {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0 2rem;
        }
        .price-card-text p {
            padding-bottom: 1rem;
            border-bottom: 2px solid rgba(128, 128, 128, 0.4);
        }
        .price-card-text .btn {
            align-self: stretch;
            max-width: none;
        }
    .about-garanty {
        gap: 1rem 1rem;
        margin: 1rem;
        column-rule: 2px solid rgba(128, 128, 128, 0.4);
        justify-content: baseline;
        align-items: stretch;
    }
    .garanty {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 20rem;
        padding: 1rem 2rem;
        flex-grow: 1;
    }
    .garanty img {
        max-width: 5rem;
    }
    @media (max-width: 650px) {
        h1 {
            margin: 0;
        }
    }
</style>