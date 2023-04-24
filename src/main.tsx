import React from 'react';
import ReactDOM from 'react-dom';
import { Toast } from 'antd-mobile';
// import App from '@/pages/login'
// import App from '@/pages/home'
import { RouterProvider } from 'react-router-dom'
import { globalRouters } from '@/router'
// import App from '@/pages/account'
import { initialize } from '@/utils/workflow';
import '@/common/styles/frame.styl'
import zhCN from 'antd/locale/zh_CN'
import { ConfigProvider } from 'antd'
import { store } from '@/store'
import { Provider } from 'react-redux'
import './mock'
// 初始化总线
initialize().then(flat => {
  if (!flat) {
    Toast.show({
      icon: 'fail',
      content: '初始化失败'
    });
    return;
  }

  const root = ReactDOM.createRoot(document.getElementById('root'))
     root.render(
      <Provider store={store}>
         <ConfigProvider locale={zhCN}>
             <RouterProvider router={globalRouters} />
         </ConfigProvider>
         </Provider>
     )
});