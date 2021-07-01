<template>

  <section class="src-componentes-header">
    <div id="header" v-bind:style="{ background: colorTitleColor }">
		<h1>Adiviná
    <br>
			<span id="colorDisplay" >{{pickedColor}}</span>
			<br>
      el Color!
      </h1>
	</div>
  </section>

</template>

<script lang="js">
import { mapState } from 'vuex';

  export default  {
    name: 'src-componentes-header',
        computed: mapState([
        'colorTitleColor',
        'pickedColor'
	])
}


</script>


<style scoped lang="css">
  .src-componentes-header {

  }

#header {   
        transition: all 0.3s;
        background: steelblue;
        text-transform: uppercase;
        text-align: center;
        margin: 0;
        color: white;
}

#colorDisplay {
	font-size: 200%;
}

span{
  padding: 30px;
}

h1 {
	font-weight: normal;
	line-height: 1.1;
	padding: 20px 0;
}

</style>