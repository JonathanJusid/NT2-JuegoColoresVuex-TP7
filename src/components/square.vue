<template>

  <section class="src-componentes-square">
    <div id="square" v-bind:style="{ backgroundColor: color }" @click="clickSquare()">
		
	</div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-square',
    props: ['color'],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
      clickSquare() {
			this.$emit('clickSquare');
		}
    },
    computed: {

    }
}


</script>

<style scoped lang="css">

  #square{
	width: 30%;
	background: blue;
	padding-bottom: 30%;
	float: left;
	margin: 1.66%;
	border-radius: 10%;
	transition: background 0.7s;
	-webkit-transition: background 0.7s;
	-moz-transition: background 0.7s;
  }


</style>