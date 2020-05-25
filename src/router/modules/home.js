import Home from '../../components/home/Home.vue';
import TaskRead from '../../components/task/TaskRead.vue';
import TaskUpdate from '../../components/task/TaskUpdate.vue';

export default [
  {
    path: '',
    component: Home,
    children: [
      {
        path: '',
        component: TaskRead,
      },
      {
        path: 'editTask/:id',
        component: TaskUpdate,
      },
    ],
  },
];
