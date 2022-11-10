import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';

import Home from './pages/components/Home';
import List1 from './pages/components/List1';
import List2 from './pages/components/List2';
import Menu from './pages/components/Menu';
import SpaceList from './pages/host/SpaceList';
import MainPage from './pages/main/MainPage';
import Layout from './pages/layout/Layout';

import AdminMain from './pages/admin/AdminMain';

function RouterMain() {
	return (
		<div>
			{/* <Menu /> */}
			<Layout>
				<Routes>
					{/* <Route path='/' element={<Home />} /> */}
					<Route path='/' element={<MainPage />} />

					<Route path='/menu1/list' element={<List1 />} />
					<Route path='/menu2'>
						<Route path='list' element={<List2 />} />
					</Route>

					{/* 호스트 */}
					<Route path='host'>
						<Route path='slist' element={<SpaceList />} />
					</Route>
					{/* 호스트 끝 */}

					{/* 어드민_관리자 */}
					<Route path='admin'>
						<Route path='' element={<AdminMain />} />
					</Route>

					<Route
						path='*'
						element={
							<div>
								<h1>잘못된 URL 주소입니다</h1>
							</div>
						}
					/>
				</Routes>
			</Layout>
		</div>
	);
}

export default RouterMain;
