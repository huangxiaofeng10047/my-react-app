import { Button, Card } from 'antd'
import { MoonOutlined, ThemeOutlined, SunOutlined } from '@/components/extraIcons'
import './header.styl'
import { useSelector, useDispatch } from 'react-redux'
import { setDark } from '@/store/slices/theme'
import { useState } from 'react'
import ThemeModal from '@/components/themeModal'
import { globalConfig } from '@/globalConfig'
function Header(props) {
    const dispatch = useDispatch()
    const theme = useSelector((state) => state.theme)
    const { title, info } = props
    const [showThemeModal, setShowThemeModal] = useState(false)
    info && info()
    return (
        <Card className="M-header">
            <div className="header-wrapper">
                <div className="logo-con">Header:{title}</div>
                <div className="opt-con">
                                       {theme.dark ? (
                           <Button
                           icon={<SunOutlined />}
                           shape="circle"
                           onClick={() => {
                               dispatch(setDark(false))
                           }}
                       ></Button>
                   ) : (
                       <Button
                           icon={<MoonOutlined />}
                           shape="circle"
                           onClick={() => {
                               dispatch(setDark(true))
                           }}
                       ></Button>
                   )}
                                         {
                          // 当globalConfig配置了主题色，并且数量大于0时，才显示主题色换肤按钮
                          globalConfig.customColorPrimarys &&
                              globalConfig.customColorPrimarys.length > 0 && (
                                  <Button
                                      icon={<ThemeOutlined />}
                                      shape="circle"
                                      onClick={() => {
                                          setShowThemeModal(true)
                                      }}
                                  ></Button>
                              )
                      }
                    </div>
                </div>
              {
                  // 显示主题色换肤对话框
                  showThemeModal && (
                      <ThemeModal
                          onClose={() => {
                              setShowThemeModal(false)
                          }}
                      />
                  )
              }
        </Card>
    )
}

export default Header