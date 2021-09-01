<template>
  <header class="main-header">
      <h1>Онлайн-школа итальянского языка</h1>
      <img src="../img/logo-1.png" alt="изображение Italiamo">
      <button class="btn">Попробовать бесплатно</button>
  </header>
  <section class="main-section">
      <h2>Пример: Italiamo - про любовь</h2>
      <span>Наша миссия - разделить с Вами любовь к Италии.</span>
      <span>
          Здесь Вы сможете найти единомышленников, поверите в себя
            и откроете чудесный новый мир языка, истории, культуры, 
            архитектуры, кулинарии и искусства Италии.
      </span>
  </section>
  <article class="main-article">
      <h2>Почему нужно выбрать нас?</h2>
      <div class="flex-row">
          <div><img src="../img/logo-1.png" alt="изображение 1"><h3>Заголовок 1</h3><span>Текст</span></div>
          <div><img src="../img/logo-1.png" alt="изображение 2"><h3>Заголовок 2</h3><span>Текст</span></div>
          <div><img src="../img/logo-1.png" alt="изображение 3"><h3>Заголовок 3</h3><span>Текст</span></div>
          <div><img src="../img/logo-1.png" alt="изображение 4"><h3>Заголовок 4</h3><span>Текст</span></div>
      </div>
  </article>
  <section class="flex-row">
      <div class="flex-column">
            <h2>Что пишут нашу ученики?</h2>
            <button class="btn">Заглянуть в виртуальный класс</button>
      </div>
      <div class="comments-animation">Отзывы с наимацией</div>
  </section>
  <section class="flex-column">
      <div class="flex-row cards">
          <div class="card-course">
              <p>Основной курс итальянского</p>
              <button class="btn">Подробнее</button>
          </div>
          <div class="card-course">
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
</template>

<script>
export default {
    
}
</script>

<style>
    .main-header {
        margin-top: 2rem;
        padding: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: linear-gradient(rgba(255, 255, 255, 0.712), rgba(255, 255, 255, 0.712)), 
            url('../../src/img/Roma-10.jpg') no-repeat center / 100% 100%;
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

    .main-article {
        margin: 0;
        font-family: 'Times New Roman', Times, serif;
        color: rgb(146, 89, 35);
        padding: 1rem;
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        flex-direction: column;
        background-color: white;
    } 

    .flex-row img {
        width: 5rem;
        height: 5rem;
    }

    .flex-row .comments-animation {
        background-color: white;
        width: 20rem;
        height: 10rem;
        margin: 2rem 2rem 0 2rem;
        text-align: center;
        padding-top: 4rem;
    }

    .card-course {
        background-color: brown;
        display: flex;
        padding: 2rem;
        justify-content: space-between;
        flex-direction: column;
        width: 20rem;
        height: 20rem;
    }

    .cards .btn {
        float: right;
        margin: 2rem;
        font-weight: lighter;
        letter-spacing: 0.05em;
        padding: 0.5rem 1rem;
        font-size: small;
    }
</style>