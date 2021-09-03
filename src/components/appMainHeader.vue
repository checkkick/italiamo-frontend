<template>
  <header class="main-header">
      <h1>Онлайн школа итальянского языка</h1>
      <img src="../img/logo-1.png" alt="изображение Italiamo">
      <button class="btn">Попробовать бесплатно</button>
  </header>
  <section class="main-section">
      <div class="flex-row">
          <div class="flex-column">
              <h2>Italiamo - про любовь</h2>
              <p>Наша миссия - разделить с Вами любовь к Италии.</p>
              <p>
                  Здесь Вы сможете найти единомышленников, поверите в себя
                  и откроете чудесный новый мир языка, истории, культуры,
                  архитектуры, кулинарии и искусства Италии.
              </p>
          </div>
          <img src="../img/teacher.png" alt="изображение учителя">
      </div>
  </section>
  <article class="main-article">
      <h2>Почему нужно выбрать нас?</h2>
      <div class="flex-row">
          <div><h1>1</h1><h3>Профессиональные педагоги</h3><p>Наши преподаватели - лучшие в своем деле. Это выпускники, а в настоящее время педагоги ведущих ВУЗов России, многие из которых долгое время проживали в Италии.
</p></div>
          <div><h1>2</h1><h3>Доступное обучение</h3><p>От 670 рублей за 1 занятие (60 минут) в мини-группе до 4-х человек</p></div>
          <div><h1>3</h1><h3>Наша школа присоединена к P.R.I.A</h3><p>P.R.I.A - программа отдела образования при генеральном консульстве Италии в Москве</p></div>
          <div><h1>4</h1><h3>Индивидуальный подход</h3><p>На наших уроках Вы не будете получать “сухие” знания. Вас ждёт увлекательное путешествие в мир Италии, которое мы организуем в соответствии с Вашими целями.</p></div>
      </div>
  </article>
  <section class="flex-row">
      <div class="flex-column main-comments">
            <h2>Что пишут нашу ученики?</h2>
            <button class="btn">Заглянуть в виртуальный класс</button>
      </div>
      <div class="main-comments-animation">Отзывы с наимацией</div>
  </section>
  <section class="flex-column main-program">
      <h2>Программы обучения</h2>
      <div class="flex-row cards">
          <div class="card-course main">
              <p>Основной курс итальянского</p>
              <button class="btn">Подробнее</button>
          </div>
          <div class="card-course teenage">
              <p>Курс итальнянского для детей и подростков</p>
              <button class="btn">Подробнее</button>
          </div>
          <div class="flex-column">
              <button class="btn">Все программы и цены</button>
              <button class="btn">Записаться на открытый урок</button>
              <button class="btn">Пройти тестирование</button>
          </div>
      </div>
  </section>
  <section class="flex-column main-teachers">
      <h2>Наши преподаватели</h2>
      <div class="flex-row">
          <app-main-teachers
                  v-for="content in this.$store.state.content"
                  :key="content.id"
                  :page-id="content.pageId"
                  :name="content.name"
                  :image="content.image"
          ></app-main-teachers>
      </div>
  </section>
  <section class="flex-row main-form-call">
      <div class="flex-column">
          <button class="btn">Как проходят уроки в Italiamo?</button>
          <button class="btn">Как быстро можно выучить итальянский?</button>
          <button class="btn">Посмотреть видео о школе</button>
      </div>
      <form action="">
          <div class="flex-column">
              <h3>Заполните форму и мы свяжемся с Вами в ближайшее время!</h3>
              <input class="input" type="text">
              <input class="input" type="text">
              <button class="btn">Отправить</button>
          </div>
      </form>
  </section>
</template>

<script>
import appMainTeachers from "./appMainTeachers";

export default {
    components: {
        appMainTeachers
    }
}
</script>

<style>
    .main-header {
        margin-top: 2rem;
        line-height: 40px;
        text-align: center;
        padding: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: linear-gradient(rgba(255, 255, 255, 0.712), rgba(255, 255, 255, 0.712)), 
            url('../img/Roma-10.jpg') no-repeat center / 100% 100%;
    }

    .main-header img {
        width: 10rem;
    }

    .main-section {
        margin: 0;
        padding: 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .main-section .flex-row {
        align-items: center;
    }

    .main-section img {
        border-radius: 10px;
        width: 206px;
        height: 191px;
    }

    .main-article {
        margin: 0;
        color: rgb(146, 89, 35);
        padding: 1rem;
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        flex-direction: column;
        background-color: white;
    }

    .main-article h1 {
        font-size: 50px;
        line-height: 58px;
        margin: 1rem;
        font-weight: lighter;
        color: #000000;
    }

    .main-article .flex-row div {
        margin: 0.5rem;
        max-width: 18rem;
    }

    .main-comments {
        max-width: 30rem;
    }

    .flex-row .main-comments-animation {
        background-color: white;
        width: 20rem;
        height: 10rem;
        margin: 2rem 2rem 0 2rem;
        text-align: center;
        padding-top: 4rem;
    }

    .main-program {
        background-color: #FFFCE6;
    }

    .card-course {
        display: flex;
        margin: 1rem;
        justify-content: center;
        flex-direction: column;
        width: 20rem;
        height: 20rem;
    }

    .card-course p {
        background: rgba(255, 255, 255, 0.7);
        padding: 0.7rem;
    }

    .card-course.main {
        background: url('../img/main-course.png') no-repeat center / 100% 100%;
    }

    .card-course.teenage {
        background: url('../img/teenage-course.png') no-repeat center / 100% 100%;
    }

    .main-program .btn {
        margin: 2rem;
        padding: 1rem;
        color: #614021;
        background: rgba(233, 187, 145, 0.9);
    }
    .main-form-call {
        background: url('../img/main-form-call.jpg') no-repeat center / 100% 100%;
    }

    .main-form-call .flex-column {
        width: 30rem;
    }
</style>