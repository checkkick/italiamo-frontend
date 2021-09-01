<template>
  <nav class="navbar-menu">
      <li><router-link to="/main"><img src="../img/logo-1.png" alt="logo"></router-link></li>
      <li><router-link to="/main">Главная</router-link></li>
      <li><a href="#">Преподаватели</a></li>
      <li><a href="#">Программы обучения</a></li>
      <li><router-link to="/comments">Отзывы</router-link></li>
      <li><a href="#">Контакты</a></li>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
    .navbar-menu {
        list-style: none;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .navbar-menu li {
        margin: 0 2rem;
    }

    .navbar-menu li a {
        color: #2c3e50;
        text-decoration: none;
    }

    .navbar-menu li a:hover, .navbar-menu li a.active {
        color: #354c639f;
    }

    .navbar-menu img {
        width: 2rem;
        height: 2rem;
    }
</style>