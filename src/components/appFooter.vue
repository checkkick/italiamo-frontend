<template>
	<footer id="contacts" class="footer flex-column">
		<h2>Наши контакты</h2>
		<h3>Заполните форму и мы свяжемся с Вами!</h3>
		<section class="flex-row flex-contacts">
			<div class="flex-column contacts-text">
				<div class="telephones">
					<h4><a href="tel:+78007001355">+7 (800) 700-13-55</a></h4>
					<h4><a href="tel:+79300309922">+7 (930) 030-99-22</a></h4>
					<h4><a href="mailto:info@italiamo.online">info@italiamo.online</a></h4>
				</div>
				<div class="about-us">
					<router-link to="/oferta">
						<h3 @click="scrollToTop" class="oferta-link">Публичная оферта</h3>
					</router-link>
					<h3 @click="readFile" class="oferta-link">Выписка из реестра лицензий</h3>
					<h4>ОГРНИП 320332800003572</h4>
					<h4>Italiamo, ©2020—2021</h4>
					<h4>
						Дизайн: <a href="mailto:adelina.sinitsyna@mail.ru">adelina.sinitsyna@mail.ru</a>
					</h4>
					<h4>Разработка: <a href="mailto:bexram33@mail.ru">bexram33@mail.ru</a></h4>
					<span class="flex-row">
						<a href="https://www.youtube.com/channel/UCqXjhRF6y0E-R2KnyuKK9IA">
							<img class="social-logo" src="../assets/youtube-logo.png" alt="youtube logo" />
						</a>
						<a href="whatsapp://send?phone=79300309922">
							<img class="social-logo" src="../assets/whatsapp.png" alt="whatsapp logo" />
						</a>
						<a href="https://t.me/joinchat/HgROd6tT_NsyZTJi">
							<img class="social-logo" src="../assets/telegram.png" alt="telegram logo" />
						</a>
						<a href="viber://add?number=79300309922">
							<img class="social-logo" src="../assets/viber.png" alt="viber logo" />
						</a>
					</span>
				</div>
			</div>
			<div class="flex-column contacts-form">
				<input
					class="input"
					type="text"
					placeholder="Как к вам обращаться?"
					v-model="inputName"
				/>
				<input
					class="input"
					type="tel"
					placeholder="+7 (___) ___-__-__"
					v-model="inputTelephone"
					v-mask="'+7 (###) ###-##-##'"
				/>
				<input class="input" type="email" placeholder="Адрес почты" v-model="inputEmail" />
				<textarea
					v-model="inputComment"
					class="textarea"
					name="contact-area"
					id="contact-comment"
					placeholder="Комментарий"
				></textarea>
				<button class="btn" @click="sendPostContacts">Отправить</button>
			</div>
		</section>
	</footer>
</template>

<script>
import axios from 'axios'
import { mask } from 'vue-the-mask'

export default {
	data() {
		return {
			inputTelephone: '',
			inputEmail: '',
			inputName: '',
			inputComment: '',
		}
	},
	methods: {
		readFile() {
			window.open('license.pdf', '_blank') //to open in new tab
		},
		scrollToTop() {
			window.scrollTo(0, 0)
		},
		sendPostContacts() {
			if (
				(this.inputTelephone.length === 18 ||
					(this.inputEmail.includes('@') && this.inputEmail.length > 6)) &&
				this.inputName.length !== 0
			) {
				axios
					.post('https://italiamo-backend.bexram.online/forms/', {
						telephone: this.inputTelephone,
						email: this.inputEmail,
						name: this.inputName,
						other: this.inputComment,
					})
					.then((response) => {
						console.log(response)
						this.inputTelephone = ''
						this.inputEmail = ''
						this.inputName = ''
						this.inputComment = ''
					})
					.catch((error) => {
						console.log(error)
					})
			} else {
				alert('Проверьте правильность ввода всех полей!')
			}
		},
	},
	directives: { mask },
	name: 'appFooter',
}
</script>

<style scoped>
.footer {
	margin: 2rem 0 0 0;
	padding: 2rem 0 2rem 0;
	background-color: rgba(255, 252, 230, 0.6);
	box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.3);
}
.footer h2,
.footer h3 {
	margin: 0 0 2rem 0;
	align-self: center;
}
.contacts-text {
	justify-content: space-between;
}
.telephones h4 {
	margin: 1rem;
}
.about-us h4 {
	font-size: 1.2rem;
	margin: 0.5rem;
}
.social-logo {
	display: flex;
	align-items: center;
	cursor: pointer;
	max-width: 3rem;
	max-height: 3rem;
	margin: 2rem;
}
.about-us img {
	width: 100%;
}
.about-us .flex-row {
	justify-content: center;
}
.contacts-form,
.contacts-text {
	margin: 0;
}
.oferta-link {
	text-decoration: underline;
	cursor: pointer;
}
@media (max-width: 985px) {
	.flex-contacts {
		flex-direction: column-reverse;
	}
	.contacts-form {
		width: 100%;
	}
	.textarea {
		width: auto;
	}
	.contacts-text {
		margin: 0;
	}
	.contacts-form .btn {
		max-width: none;
	}
}
</style>
