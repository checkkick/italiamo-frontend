<template>
  <nav class="navbar-menu">
      <router-link to="/">
          <img class="img-logo" src="../assets/logo-1.png" alt="logo">
      </router-link>
      <router-link
              :class="this.$route.path === '/' ? 'hover-item ' : ''"
              class="navbar-menu-item"
              to="/"
      >Главная</router-link>
      <router-link
              :class="this.$route.path === '/programs' ? 'hover-item ' : ''"
              class="navbar-menu-item"
              to="/programs"
      >Программы</router-link>
      <router-link
              :class="this.$route.path === '/teachers' ? 'hover-item ' : ''"
              class="navbar-menu-item"
              to="/teachers"
      >Цены</router-link>
      <router-link
              :class="this.$route.path === '/teachers' ? 'hover-item ' : ''"
              class="navbar-menu-item"
              to="/teachers"
      >Оплата</router-link>
      <router-link
              :class="this.$route.path === '/teachers' ? 'hover-item ' : ''"
              class="navbar-menu-item"
              to="/teachers"
      >Преподаватели</router-link>
      <router-link
              :class="this.$route.path === '/comments' ? 'hover-item ' : ''"
              class="navbar-menu-item"
              to="/comments"
      >Отзывы</router-link>
      <router-link
              :class="this.$route.path === '/contacts' ? 'hover-item ' : ''"
              class="navbar-menu-item"
              to="/contacts"
      >Контакты</router-link>
      <img
              class="img-menu"
              v-on:click="showDropdownMenu = !showDropdownMenu"
              src="../assets/menu.png"
              alt="dropdown-menu-logo"
      >
      <transition name="fade">
          <section class="dropdown-menu flex-column" v-if="showDropdownMenu">
              <router-link v-on:click="showDropdownMenu = !showDropdownMenu"
                           :class="this.$route.path === '/' ? 'hover-item ' : ''"
                           class="dropdown-menu-item"
                           to="/"
              >Главная</router-link>
              <router-link v-on:click="showDropdownMenu = !showDropdownMenu"
                           class="dropdown-menu-item"
                           to="/"
              >О нас</router-link>
              <router-link v-on:click="showDropdownMenu = !showDropdownMenu"
                           :class="this.$route.path === '/comments' ? 'hover-item ' : ''"
                           class="dropdown-menu-item"
                           to="/comments"
              >Отзывы учеников</router-link>
              <router-link v-on:click="showDropdownMenu = !showDropdownMenu"
                           :class="this.$route.path === '/programs' ? 'hover-item ' : ''"
                           class="dropdown-menu-item"
                           to="/programs"
              >Программы обучения</router-link>
              <router-link
                      v-on:click="showDropdownMenu = !showDropdownMenu"
                      :class="this.$route.path === '/teachers' ? 'hover-item ' : ''"
                      class="dropdown-menu-item"
                      to="/teachers"
              >Преподаватели</router-link>
              <router-link
                      v-on:click="showDropdownMenu = !showDropdownMenu"
                      :class="this.$route.path === '/contacts' ? 'hover-item ' : ''"
                      class="dropdown-menu-item"
                      to="/contacts"
              >Контакты</router-link>
          </section>
      </transition>
  </nav>
</template>

<script>
export default {
    data() {
        return {
            showDropdownMenu: false
        }
    }
}
</script>

<style>
    .navbar-menu {
        padding: 0.5rem 3rem;
        font-size: 28px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
        background: rgba(255, 255, 255, 0.98);
        text-shadow: 0 3px 3px rgba(0, 0, 0, 0.25);
        box-shadow: 0 0 1rem 0 rgba(0,0,0,0.1);
    }

    .img-logo {
        margin-right: 1.5rem;
        cursor: pointer;
        width: 80px;
        height: 80px;
    }

    .img-menu {
        margin-left: 1.5rem;
        cursor: pointer;
    }

    .navbar-menu-item {
        margin: 0 0.5rem;
        padding: 1rem;
        text-decoration: none;
        background: linear-gradient(currentColor, currentColor) no-repeat 0 100%;
        background-size: 0 2px;
        transition: background-size .3s ease;
    }

    .navbar-menu-item.hover-item,
    .dropdown-menu-item.hover-item{
        background-size: 100% 2px;
    }

    .navbar-menu-item:hover,
    .dropdown-menu-item:hover{
        transform: scale(1.04);
        background-size: 100% 2px;
    }

    .dropdown-menu, .dropdown-menu.flex-column {
        margin: 0;
        align-items: center;
        background: rgba(255, 255, 255, 0.98);
        position: fixed;
        top: 5.28rem;
        right: 0;
        left: 0;
    }

    .dropdown-menu-item {
        margin: 1rem;
        padding: 0.5rem;
        text-decoration: none;
        background: linear-gradient(currentColor, currentColor) no-repeat 0 100%;
        background-size: 0 2px;
        transition: background-size .3s ease;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
</style>