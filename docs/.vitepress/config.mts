import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Project Kanha",
  description: "Home page of Project Kanha",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Team', link: '/team' }
    ],

    sidebar: [
      { text: 'About', link: '/about' }
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'About', link: '/about' },
      //     // { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
