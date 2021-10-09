<template>
  <div>
    <p>例子列表</p>
    <ul>
      <li>
        <a href="/with_external_link.html" target="_blank">引入外部js文件的例子</a>
      </li>
      <li><router-link :to="{name: 'Hello'}">
          Hello
        </router-link>:  显示最基本的Vuejs</li>
      <li><router-link to="/say_hi">
          SayHi
        </router-link>:  第一个Vue页面</li>
      <li><router-link :to="{name: 'SayHiFromVariable'}">
          SayHiFromVariable
        </router-link>: 在页面中使用参数</li>
      <li><router-link :to="{name: 'BlogList'}">
          BlogList
        </router-link>: 调用真实接口, 并渲染出博客列表</li>
      <li><router-link :to="{name: 'Blog', query: {id: 1000}}">
          Blog
        </router-link>: 调用真实接口,显示blog文章</li>
      <li><router-link :to="{name: 'TwoWayBinding'}">
          TwoWayBinding
        </router-link>: 一个双向绑定的例子.</li>
      <li><router-link :to="{name: 'FormInput'}">
          FormInput
        </router-link>: 表单输入项大全.</li>
      <li><router-link :to="{name: 'FormSubmit'}">
          FormSubmit
        </router-link>: 提交表单的例子.</li>
      <li> 组件的使用,见:
        <router-link :to="{name: 'BlogList'}">
          BlogList
        </router-link> 和
        <router-link :to="{name: 'Blog', query: {id: 1000}}">
          Blog
        </router-link>
      </li>
      <li><router-link :to="{name: 'SayHiFromMixin'}">
          SayHiFromMixin
        </router-link>: Mixin的例子.</li>
      <li>Vuex的例子: <router-link :to="{name: 'ShowCounter1'}">
          倒计时页面1
        </router-link></li>
      <li><router-link :to="{name: 'ShowCounter2'}">
          倒计时页面2
        </router-link></li>
      <li>
          单元测试: 在控制台,运行该命令即可: $ npm run test:unit <br/>
          具体内容见 tests/unit/calculator.spec.js 和 src/lib/calculator.js
      </li>

      <li>
        <router-link :to="{name: 'CompositionApiDemoOne'}">
          composition API demo 1
        </router-link> 与
        <router-link :to="{name: 'CompositionApiDemoOneEquivalenceFromOptionApi'}">
          等效的 option API
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'CompositionApiProvideLevelOne'}">
          composition API demo 2(provide/inject)
        </router-link> 与
        <router-link :to="{name: 'ProvideLevelOne'}">
          等效的 option API (provide/inject)
        </router-link>
      </li>

      <li>
        <router-link :to="{name: 'CompositionApi'}">
          composition API (vue3新特性, 组合式API) (todo)
        </router-link> 与
        <router-link to="/non_composition_api">
          options API (选项式API)
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'Teleport'}">
          Teleport实现弹窗
        </router-link> 与
        <router-link :to="{name: 'NoTeleport'}">
          非Teleport的传统方式
        </router-link>
      </li>

    </ul>
    <p>文字版教程在: <a href=https://github.com/sg552/happy_book_vuejs>https://github.com/sg552/happy_book_vuejs</a></p>
  </div>
</template>
