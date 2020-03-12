import HMR from '@sveltech/routify/hmr'
import App from './App.svelte';
import "./tailwindcss.css";

const app = HMR(App, {
    target: document.body
}, 'routify-app')

export default app;