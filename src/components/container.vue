<template>
  <section class="src-componentes-container">
	<div id="container">	
     <Square v-for="(color, index) in colors" v-bind:key="index" v-bind:color="color" @clickSquare="atSquare(color, index)" />
	</div>
  </section>

</template>

<script lang="js">

import Square from './square';
import { mapState } from 'vuex';


export default  {
    name: 'src-componentes-container',
    components: {
      Square
  },
    methods: {
      atSquare(color, index) {
			this.$store.commit('clickSquare', {color, removeIndex: index});
    }
  },
  computed: mapState([
		'colors'
	])
 }  
</script>

<style scoped lang="css">
  .src-componentes-container {

  }

#container {
        margin: 20px auto;
        max-width: 600px;
    }

</style>