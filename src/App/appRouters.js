import DashBoard from '../DashBoard';
import Accounts from '../Accounts';
import Addresses from '../Addresses';
import Democracy from '../Democracy';
import Chain from '../Chain';

export default [
  {
    name: '首页',
    path: '/dashboard',
    component: DashBoard,
  },
  {
    name: '账户',
    path: '/accounts',
    component: Accounts,
  },
  {
    name: '联系人',
    path: '/addresses',
    component: Addresses,
  },
  {
    name: '选举',
    path: '/democracy',
    component: Democracy,
  },
  {
    name: '链中继',
    path: '/chain',
    component: Chain,
  },
];
