<template>
  <nav class="navbar-menu">
      <router-link class="link-logo" to="/" @click="scrollToTop">
          <img class="img-logo" src="../assets/logo-1.png" alt="logo">
      </router-link>
      <router-link
              @click="scrollToTop"
              :class="this.$route.path === '/' ? 'hover-item ' : ''"
              class="navbar-menu-item"
              to="/"
      >Главная</router-link>
      <router-link
              @click="scrollToTop"
              :class="this.$route.path.includes('/news') ? 'hover-item ' : ''"
              class="navbar-menu-item"
              to="/news"
      >Новости</router-link>
      <router-link
              @click="scrollToTop"
              :class="this.$route.path.includes('/programs') ? 'hover-item ' : ''"
              class="navbar-menu-item"
              to="/programs"
      >Программы</router-link>
      <router-link
              @click="scrollToTop"
              :class="this.$route.path.includes('/prices') ? 'hover-item ' : ''"
              class="navbar-menu-item"
              to="/prices"
      >Цены</router-link>
      <router-link
              @click="scrollToTop"
              :class="this.$route.path.includes('/payment') ? 'hover-item ' : ''"
              class="navbar-menu-item"
              to="/payment"
      >Оплата</router-link>
      <router-link
              @click="scrollToTop"
              :class="this.$route.path.includes('/teachers') ? 'hover-item ' : ''"
              class="navbar-menu-item"
              to="/teachers"
      >Преподаватели</router-link>
      <router-link
              @click="scrollToTop"
              :class="this.$route.path.includes('/comments') ? 'hover-item ' : ''"
              class="navbar-menu-item"
              to="/comments"
      >Отзывы</router-link>
      <a class="navbar-menu-item" href="#contacts" v-smooth-scroll="{ updateHistory: false }">Контакты</a>
      <img
              class="img-menu"
              @click="showDropdownMenu = !showDropdownMenu"
              src="../assets/menu.png"
              alt="dropdown-menu-logo"
      >
      <transition name="fade">
          <section class="dropdown-menu flex-column" v-if="showDropdownMenu">
              <router-link
                      @click="dropdownMenu"
                      :class="this.$route.path === '/' ? 'hover-item ' : ''"
                      class="dropdown-menu-item"
                      to="/"
              >Главная</router-link>
              <router-link
                      @click="dropdownMenu"
                      :class="this.$route.path.includes('/news') ? 'hover-item ' : ''"
                      class="dropdown-menu-item"
                      to="/news"
              >Новости</router-link>
              <router-link
                      @click="dropdownMenu"
                      :class="this.$route.path.includes('/programs') ? 'hover-item ' : ''"
                      class="dropdown-menu-item"
                      to="/programs"
              >Программы обучения</router-link>
              <router-link
                      @click="dropdownMenu"
                      :class="this.$route.path.includes('/prices') ? 'hover-item ' : ''"
                      class="dropdown-menu-item"
                      to="/prices"
              >Цены</router-link>
              <router-link
                      @click="dropdownMenu"
                      :class="this.$route.path.includes('/payment') ? 'hover-item ' : ''"
                      class="dropdown-menu-item"
                      to="/payment"
              >Оплата</router-link>
              <router-link
                      @click="dropdownMenu"
                      :class="this.$route.path.includes('/teachers') ? 'hover-item ' : ''"
                      class="dropdown-menu-item"
                      to="/teachers"
              >Преподаватели</router-link>
              <router-link
                      @click="dropdownMenu"
                      :class="this.$route.path.includes('/comments') ? 'hover-item ' : ''"
                      class="dropdown-menu-item"
                      to="/comments"
              >Отзывы</router-link>
              <a class="dropdown-menu-item"
                 href="#contacts"
                 @click="showDropdownMenu = !showDropdownMenu"
                 v-smooth-scroll="{ updateHistory: false }">Контакты</a>
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
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0,0);
        },
        dropdownMenu() {
            this.showDropdownMenu = !this.showDropdownMenu
            window.scrollTo(0,0);
        }
    },
    watch: {
        showDropdownMenu() {
            if (this.showDropdownMenu) {
                document.body.classList.add('modal-open')
            } else {
                document.body.classList.remove('modal-open')
            }
        },
    }
}
</script>

<style>
    .navbar-menu {
        padding: 0.5rem 1rem;
        font-size: 28px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
        background: rgba(255, 255, 255, 1);
        text-shadow: 0 3px 3px rgba(0, 0, 0, 0.25);
        box-shadow: 0 0 1rem 0 rgba(0,0,0,0.1);
    }
    .link-logo {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .img-logo {
        cursor: pointer;
        width: 100%;
        max-width: 5rem;
        max-height: 5rem;
    }
    .img-menu {
        display: none;
        cursor: pointer;
    }
    .navbar-menu-item {
        margin: 0 0.5rem;
        padding: 1rem 0.5rem;
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
        z-index: -1;
        margin: 0;
        padding-top: 6rem;
        justify-content: space-around;
        align-items: center;
        background: rgba(255, 255, 255, 1);
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
    }
    .dropdown-menu-item {
        margin: 2%;
        padding: 0.5rem;
        text-decoration: none;
        background: linear-gradient(currentColor, currentColor) no-repeat 0 100%;
        background-size: 0 2px;
        transition: background-size .3s ease;
    }
    .fade-enter-active {
        animation: fade-in .4s;
    }
    .fade-leave-active {
        animation: fade-in .4s reverse;
    }
    @keyframes fade-in {
        0% {
            transform: translateX(100%);
        }
        100% {
            transform: translateX(0%);
        }
    }

    @media (max-width : 1250px) {
        .img-menu{
            display: inline-block;
        }
        .navbar-menu-item {
            display: none;
        }
    }
</style>