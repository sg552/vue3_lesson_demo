import { createStore } from 'vuex'
import { INCREASE } from '@/vuex/mutation_types'

export default createStore({
  state: {
    points: 0
  },
  mutations: {

    /*
      这里定义了一个方法： INCREASE, 是以变量作为方法名，算是元编程的方式
      不喜欢麻烦的同学也可以直接用普通方式定义该方法， 例如  
      INCREASE() { ... }
    */
    [INCREASE]() {
      this.state.points = this.state.points + 1 
    }
  },
  actions: {
  },
  modules: {
  },
})



