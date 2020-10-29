// import Vue from 'vue';
import Vue from 'vue/dist/vue.js';
import test from 'ava';
import Notification from '../src/Notification';

test('that it renderes a notification', t => {
	// t.is(Notification.data().message, 'Hello World');

	// new Vue(Notification).$mount();

	let N = Vue.extend(Notification);

	let vm = new N({ propsDate: {
		message: 'Foobar'
	}}).$mount();

	t.is(vm.$el.textContent, 'Foobar');
});