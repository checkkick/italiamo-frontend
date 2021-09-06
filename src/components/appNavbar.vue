<template>
  <nav class="navbar-menu">
      <router-link to="/"><img src="../img/logo-1.png" alt="logo"></router-link>
      <router-link to="/">Главная</router-link>
      <router-link to="/">Преподаватели</router-link>
      <router-link to="/programs">Программы обучения</router-link>
      <router-link to="/comments">Отзывы</router-link>
      <router-link to="/">Контакты</router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
    .navbar-menu {
        padding: 1.5rem 5rem;
        font-family: 'Poiret One', serif, sans-serif;
        font-size: 28px;
        list-style: none;
        height: 3rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        text-shadow: 0 3px 3px rgba(0, 0, 0, 0.25);
        box-shadow: 0 0 1rem 0 rgba(0,0,0,0.1);
    }

    .navbar-menu li {
        margin: 0 2rem;
    }

    .navbar-menu img {
        width: 2rem;
        height: 2rem;
    }
</style>