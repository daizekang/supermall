<template>
	<div id="index">
		<nav-bar class="index-nav"><div slot="center">购物街</div></nav-bar>
	
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar'
	import {getIndexMultidata} from 'network/index';
	
	export default {
		name:'index',
		components: {
			NavBar
		},
		data(){
			return {
				banners:[],
				recommends:[]
			}
		},
		created(){
			getIndexMultidata().then(res => {
//				console.log(res);
				this.banners = res.data.banners.list;
				this.recommends = res.data.recommends.list;
			})
		}
	}
</script>

<style>
	.index-nav {
		background-color: var(--color-tint);
		color: white;
	}
	
</style>