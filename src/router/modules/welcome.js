import Welcome from '../../components/inicio/Welcome.vue';
import Tasks from '../../components/task/Tasks.vue';
import EditTask from '../../components/task/EditTask.vue';

export default [
  {
    path: '',
    component: Welcome,
    children: [
      {
        path: '',
        component: Tasks,
      },
      {
        path: 'editTask/:id',
        component: EditTask,
      },
    ],
  },
];
