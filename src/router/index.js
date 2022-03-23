import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index'
import Hello from '@/views/Hello'
import BlogList from '@/views/BlogList'
import Blog from '@/views/Blog'

import SayHi from '@/views/SayHi'
import SayHiFromVariable from '@/views/SayHiFromVariable'
import SayHiFromMethod from '@/views/SayHiFromMethod'

import TwoWayBinding from '@/views/TwoWayBinding'
import FormInput from '@/views/FormInput'
import FormSubmit from '@/views/FormSubmit'

import SayHiFromMixin from '@/views/SayHiFromMixin'

import ShowCounter1 from '@/views/ShowCounter1'
import ShowCounter2 from '@/views/ShowCounter2'

import CompositionApi from '@/views/CompositionApi'
import NonCompositionApi from '@/views/NonCompositionApi'

import CompositionApiDemoOne from '@/views/CompositionApiDemoOne'
import CompositionApiDemoOneEquivalenceFromOptionApi from '@/views/CompositionApiDemoOneEquivalenceFromOptionApi'

import ProvideLevelOne from '@/views/ProvideLevelOne'
import ProvideLevelTwo from '@/components/ProvideLevelTwo'
import ProvideLevelThree from '@/components/ProvideLevelThree'
import CompositionApiProvideLevelOne from '@/views/CompositionApiProvideLevelOne'
import CompositionApiProvideLevelOneReactive from '@/views/CompositionApiProvideLevelOneReactive'

import Teleport from '@/views/Teleport'
import NoTeleport from '@/views/NoTeleport'

import ApplicationConfig from '@/views/ApplicationConfig'

import ComponentsCommunicationEmit from '@/views/ComponentsCommunicationEmit'
import ComponentsCommunicationRef from '@/views/ComponentsCommunicationRef'
import ComponentsCommunicationSlot from '@/views/ComponentsCommunicationSlot'

const routes = [
    {
      path: '/',
      name: 'Index',
      component: Index
    },

    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },

  /* 下面的name: 'SayHi' 可以省略, 在view中 这样调用即可
   * <router-link to="/say_hi"> SayHi </router-link>
   */
    {
      path: '/say_hi',
      name: 'SayHi',
      component: SayHi
    },

    {
      path: '/say_hi_from_variable',
      name: 'SayHiFromVariable',
      component: SayHiFromVariable
    },
    {
      path: '/say_hi_from_method',
      name: 'SayHiFromMethod',
      component: SayHiFromMethod
    },    
    {
      path: '/blogs',
      name: 'BlogList',
      component: BlogList
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },

    {
      path: '/two_way_binding',
      name: 'TwoWayBinding',
      component: TwoWayBinding
    },

    {
      path: '/form_input',
      name: 'FormInput',
      component: FormInput
    },
    {
      path: '/form_submit',
      name: 'FormSubmit',
      component: FormSubmit
    },
    {
      path: '/say_hi_from_mixin',
      name: 'SayHiFromMixin',
      component: SayHiFromMixin
    },
    {
      path: '/show_counter_1',
      name: 'ShowCounter1',
      component: ShowCounter1
    },
    {
      path: '/show_counter_2',
      name: 'ShowCounter2',
      component: ShowCounter2
    },
    {
      path: '/provide_and_inject',
      name: 'ProvideLevelOne',
      component: ProvideLevelOne
    },
    {
      path: '/composition_api',
      name: 'CompositionApi',
      component: CompositionApi
    },
    {
      path: '/composition_api_demo_one',
      name: 'CompositionApiDemoOne',
      component: CompositionApiDemoOne
    },
    {
      path: '/composition_api_demo_one_eq_option_api',
      name: 'CompositionApiDemoOneEquivalenceFromOptionApi',
      component: CompositionApiDemoOneEquivalenceFromOptionApi
    },
    {
      path: '/composition_api_demo_two_provide_and_inject',
      name: 'CompositionApiProvideLevelOne',
      component: CompositionApiProvideLevelOne
    },
    {
      path: '/composition_api_demo_two_provide_and_inject_reactive',
      name: 'CompositionApiProvideLevelOneReactive',
      component: CompositionApiProvideLevelOneReactive
    },
    {
      path: '/non_composition_api',
      component: NonCompositionApi
    },

    {
      path: '/teleport',
      name: 'Teleport',
      component: Teleport
    },
    {
      path: '/no_teleport',
      name: 'NoTeleport',
      component: NoTeleport
    },
    {
      path: '/application_config',
      name: 'ApplicationConfig',
      component: ApplicationConfig
    },    
    {
      path: '/component_communication_emit',
      name: 'ComponentsCommunicationEmit',
      component: ComponentsCommunicationEmit
    },    
    {
      path: '/component_communication_ref',
      name: 'ComponentsCommunicationRef',
      component: ComponentsCommunicationRef
    },    
    {
      path: '/component_communication_slot',
      name: 'ComponentsCommunicationSlot',
      component: ComponentsCommunicationSlot
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
