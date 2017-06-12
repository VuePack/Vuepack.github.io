/**
 * 用于兄弟组件共享一个实例，$emit监听一个事件
 */

import Vue from 'vue'

export let instance = new Vue()