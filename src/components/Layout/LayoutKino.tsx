import { Layout } from 'antd'

import { FC } from 'react'
import Home from '../../pages/Home'
import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import Search from '../Search/Search'

const { Header, Sider, Content } = Layout

const LayoutKino: FC = () => {
	return (
		<Layout
			style={{
				minHeight: '100vh',
				textAlign: 'center',
				backgroundColor: '#f5f5f7'
			}}
		>
			<Header
				style={{
					color: '#fff',
					backgroundColor: 'black',
					width: '100vw',
					display: 'flex',
					justifyContent: 'space-evenly',
					alignItems: 'center',
					position: 'sticky',
					top: 0,
					zIndex: 1
				}}
			>
				<Logo />
				<Search />
			</Header>
			<Layout
				style={{
					width: 1200,
					margin: '0 auto'
				}}
			>
				<Sider
					style={{
						backgroundColor: '#fbfbfb',
						overflow: 'auto',
						height: '100vh',
						position: 'fixed'
					}}
				>
					<Menu />
				</Sider>
				<Content
					style={{
						color: 'black',
						backgroundColor: 'white',
						marginLeft: '200px'
					}}
				>
					<Home />
				</Content>
			</Layout>
		</Layout>
	)
}

export default LayoutKino
