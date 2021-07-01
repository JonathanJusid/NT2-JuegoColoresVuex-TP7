<template>
  <div id="app">
    <Header/>
    <Navbar @reset="resetGame"/>
    <Container />
  </div>
</template>

<script>
import Header from './components/header'
import Navbar from './components/navbar'
import Container from './components/container'

export default {
  name: 'App',
  components: {
    Header,
    Navbar,
    Container
  },
    mounted(){
    this.resetGame();
  },
    methods: {
        resetGame() {
                const newColores = this.createNewColors(this.$store.state.colorCount || 6);
                const newPickedColor = newColores[this.pickColor()];
                this.$store.commit('resetGame', { newColores, newPickedColor });
        },
        createNewColors(numbers) {
                const arr = [];
                
                for (var i = 0; i < numbers; i++) {
                    arr.push(this.createRandomStringColor());
                }
                return arr;
        },
          pickColor() {
                  const hard = this.$store.state.isHard ?? true;
                  return Math.floor(Math.random() * (hard ? 6 : 3));
        },    
          createRandomStringColor() {
                  const randomInt = () => Math.floor(Math.random() * 256);
                  return "rgb(" + randomInt() + ", " + randomInt() + ", " + randomInt() + ")";
         },
    }
}

</script>

<style>
#app {
  font-family: "Montserrat", "Avenir";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: #232323;
	margin: 0;	
}
</style>
