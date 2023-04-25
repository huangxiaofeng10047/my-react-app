import Header from '@/components/header'
import './entry.styl'
import { Outlet, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ConfigProvider, theme } from 'antd'
import { PrivateRoute } from '@/router'
const { darkAlgorithm, defaultAlgorithm } = theme

function Entry() {
    const location = useLocation()

    const globalTheme = useSelector((state) => state.theme)
         // Ant Design主题变量
     const antdTheme = {
         // 亮色/暗色配置
         algorithm: globalTheme.dark ? darkAlgorithm : defaultAlgorithm,
     }
            // 应用自定义主题色
       if (globalTheme.colorPrimary) {
           antdTheme.token = {
               colorPrimary: globalTheme.colorPrimary,
           }
       }
    return (
        <PrivateRoute>
        <ConfigProvider theme={antdTheme}>
        <div className="M-entry">
            <Header title={location.pathname} />
            <div className="main-container">
                <Outlet />
            </div>
        </div>
        </ConfigProvider>
        </PrivateRoute>
        
    )
}

export default Entry