import { Button, theme, Modal } from 'antd';
import './home.styl';
import { logout, goto } from '@/api';
// import Header from '@/components/header'
const { useToken } = theme;
function Home() {
  const { token } = useToken();
  const [modal, contextHolder] = Modal.useModal();

  // 退出登录
  const exit = () => {
    modal.confirm({
      title: '是否退出登录？',
      onOk() {
        logout();
      },
    });
  };

  return (
    <div className="P-home">
      {/* <Header title="home" info={()=>{console.log('info:home')}} /> */}
      <h1 style={{ color: token.colorText }}>Home Page</h1>
      <div className="ipt-con">
        <Button
          onClick={() => {
            goto('/login');
          }}
        >
          组件外跳转
        </Button>
      </div>
      <div className="ipt-con">
        <Button type="primary" onClick={exit}>
          返回登录
        </Button>
      </div>
      {
        // 这是最终解决Modal.method跟随换肤的关键，contextHolder在组件DOM中随便找个地方放就行
        contextHolder
      }
    </div>
  );
}

export default Home;
