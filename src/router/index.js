import Vue from 'vue'
import VueRouter from 'vue-router'
import bussiness from '../views/bussiness/bussiness'
import cart from '../views/cart/cart'
import index from '../views/index/index'
import search from '../views/search/search'

Vue.use(VueRouter)

const routes = [{
		path: '',
		redirect: '/index'

	},
	{
		path: '/index',
		component: index
	},
	{
		path: '/cart',
		component: cart
	},
	{
		path: '/search',
		component: search
	},
	{
		path: '/bussiness',
		component: bussiness
	}
]

const router = new VueRouter({
	routes,
	mode: 'history'
})

export default router