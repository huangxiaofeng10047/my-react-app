import {  Navigate } from 'react-router-dom'
import { globalConfig } from '@/globalConfig'

   // 路由守卫
   export function PrivateRoute(props) {
       // 判断localStorage是否有登录用户信息，如果没有则跳转登录页
       return window.localStorage.getItem(globalConfig.SESSION_LOGIN_INFO) ? (
           props.children
       ) : (
           <Navigate to="/login" />
       )
   }

