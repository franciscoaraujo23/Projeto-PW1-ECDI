import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import Autenticacao from '../components/Autenticacao.vue';
import Programa from '../components/Programa.vue';
import Inscricoes from '../components/Inscricoes.vue';

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/auth', name: 'Autenticacao', component: Autenticacao },
  { path: '/programa', name: 'Programa', component: Programa },
  { 
    path: '/inscricoes', 
    name: 'Inscricoes', 
    component: Inscricoes, 
    meta: { requiresAuth: true } 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Guarda de navegação global para proteger rotas
router.beforeEach((to, from, next) => {
  const isAuthenticated = false; // Aqui você conecta com sua lógica de autenticação
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/auth'); // Redireciona para a página de login
  } else {
    next(); // Permite a navegação
  }
});

export default router;
