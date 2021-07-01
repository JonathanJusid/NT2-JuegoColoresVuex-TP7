<template>

  <section class="src-componentes-navbar">
    <div id="navigator">
		<button id="reset" @click="resetGame">{{mensajeRestart}}</button>
		<span id="message">{{mensaje}}</span>

		<button label="easy" @click="changeDifficulty(false)">Fácil</button>
		<button label="hard" class="selected" @click="changeDifficulty(true)">Difícil</button>
	</div>
  </section>

</template>

<script lang="js">
import { mapState } from 'vuex';

  export default  {
    name: 'src-componentes-navbar',
    methods: {
      resetGame() {
        this.$emit('reset');
    },
      changeDifficulty(isHard) {
        this.$store.commit('changeDifficulty', isHard);
        this.$emit('reset');
		}
    },
        computed: mapState([

          'mensajeRestart',
          'mensaje'
    ])
}
</script>

<style scoped lang="css">
  .src-componentes-navbar {

  }

#navigator{
      background: #ffffff;
      height: 30px;
      text-align: center;
      margin: 0;
      margin-top: -30px;
    }

#message {
	color: #ffffff;
	display: inline-block;
	width: 20%;
}

span{
  color: black !important;
}

button {
	border: none;
	background-color: white;
	font-family: "Montserrat", "Avenir";
	text-transform: uppercase;
	height: 100%;
	font-weight: 700;
	letter-spacing: 1px;
	color: steelblue;
	transition: all 0.3s;
	outline: none;
}
button:hover {
	color: white;
	background-color: steelblue;
}
  
</style>
