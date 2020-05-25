import PageStoreEmployee from '../../pages/PageStoreEmployee.vue';
import EmployeeRead from '../../components/settings/storeEmployee/EmployeeRead.vue';
import StoreRead from '../../components/settings/storeEmployee/StoreRead.vue';
import StoreUpdate from '../../components/settings/storeEmployee/StoreUpdate.vue';

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
      {
        path: 'updateStore/:id',
        components: {
          a: StoreUpdate,
          b: EmployeeRead,
        },
      },
    ],
  },
];
