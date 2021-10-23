<template>
  <div>
    <p>例子列表</p>
    <ul>
      <li>
        引入外部js文件的例子:
        1. <a href="/with_external_link.html" target="_blank">hello</a>
        2. <a href="/with_external_link_todo.html" target="_blank">待办事项Demo</a>
        3. <a href="/with_external_link_v-for.html" target="_blank">v-for循环显示</a>
        4. <a href="/with_external_link_v-if.html" target="_blank">v-if判断显示</a>
        5. <a href="/with_external_link_v-for_and_v-if.html" target="_blank">v-for与v-if结合使用</a>
        6. <a href="/with_external_link_v-on.html" target="_blank">v-on使用事件</a>
        7. <a href="/with_external_link_v-bind.html" target="_blank">v-bind绑定</a>
        8. <a href="/with_external_link_two_way_binding.html" target="_blank">双向绑定</a>
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
        ，脱离webpack, 在纯vue的环境下使用: 
        <a href="/with_external_link_component.html" target="_blank">引入外部js文件创建组件</a>, 
        <a href="/with_external_link_component_slot.html" target="_blank">Slot</a>, 
        <a href="/with_external_link_component_slot_with_name.html" target="_blank">Named Slot</a>, 
      </li>
      <li><router-link :to="{name: 'SayHiFromMixin'}">
          SayHiFromMixin
        </router-link>: Mixin的例子</li>
      <li>Computed: 
        <a href="/with_external_link_computed.html" target="_blank">Computed(纯Vue)</a>, 
        <a href="/with_external_link_computed_replaced_by_method.html" target="_blank">Computed的等效methods的写法(纯Vue)</a>
      </li>
      <li>Watch: 
        <a href="/with_external_link_watch.html" target="_blank">Watch(纯Vue)</a>, 
        <a href="/with_external_link_watch_replaced_by_computed.html" target="_blank">Watch的等效computed的写法(纯Vue)</a>, 
      </li>

      <li>Vuex的例子: <router-link :to="{name: 'ShowCounter1'}">
          倒计时页面1
        </router-link></li>
      <li><router-link :to="{name: 'ShowCounter2'}">
          倒计时页面2
        </router-link></li>

      <li>
        <ul>Event(事件): 
          <li>
            <a href="/event_v-on1.html" target="_blank">v-on 1. 没有声明方法，使用了inline形式的代码</a>, 
          </li>
          <li>
            <a href="/event_v-on2.html" target="_blank">v-on 2. 调用了具体方法</a>, 
          </li>
          <li>
            <a href="/event_v-on3.html" target="_blank">v-on 3. 方法中增加了参数</a>, 
          </li>
          <li>
            <a href="/event_preventdefault.html" target="_blank">preventDefault: 终止当前事件的传递</a>, 
          </li>
          <li>
            <a href="/event_prevent_modifier.html" target="_blank">modifier: event修饰词</a>, 
          </li>

        </ul>
      </li>
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
