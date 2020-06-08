import PageStoreEmployee from '../../pages/PageStoreEmployee.vue';
import EmployeeRead from '../../components/settings/storeEmployee/EmployeeRead.vue';
import StoreRead from '../../components/settings/storeEmployee/StoreRead.vue';

export default [
  {
    path: '/storeEmployee',
    component: PageStoreEmployee,
    children: [
      {
        path: '',
        components: {
          a: StoreRead,
          b: EmployeeRead,
        },
      },
    ],
  },
];
