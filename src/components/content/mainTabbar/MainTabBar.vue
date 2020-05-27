<template>
	<tab-bar>
		<tab-bar-item path="/index">
			<img slot="item-icon" src="~assets/img/tabber/index.svg" alt="" />
			<img slot="item-icon-active" src="~assets/img/tabber/index_active.svg" alt="" />
			<div slot="item-text">首页</div>
		</tab-bar-item>

		<tab-bar-item path="/cart">
			<img slot="item-icon" src="~assets/img/tabber/cart.svg" alt="" />
			<img slot="item-icon-active" src="~assets/img/tabber/cart_active.svg" alt="" />
			<div slot="item-text">购物车</div>
		</tab-bar-item>

		<tab-bar-item path="/search">
			<img slot="item-icon" src="~assets/img/tabber/search.svg" alt="" />
			<img slot="item-icon-active" src="~assets/img/tabber/search_active.svg" alt="" />
			<div slot="item-text">搜索</div>
		</tab-bar-item>

		<tab-bar-item path="/bussiness">
			<img slot="item-icon" src="~assets/img/tabber/bussiness-man.svg" alt="" />
			<img slot="item-icon-active" src="~assets/img/tabber/bussiness-man-active.svg" alt="" />
			<div slot="item-text">我的</div>
		</tab-bar-item>
	</tab-bar>
</template>

<script>
	import TabBar from 'components/common/tabber/TabBar'
	import TabBarItem from 'components/common/tabber/TabBarItem'
	export default {
		name: 'MainTabBar',
		components: {
			TabBar,
			TabBarItem
		}
	}
</script>

<style>

</style>