<script>
    import { Router } from '@sveltejs/kit';
    import Header from './components/Header.svelte';
    import { page } from '$app/stores';

    // Define or import any data needed for the header
    let logoImageURL = '/logo.svg';
    let logoImageAlt = 'Logo Alt Text';
    let urlStr = $page.url;

    let secondaryMenu = [
        { link: '/about', text: 'About Us' },

    ];

    let mainMenu = [
        { link: '/', text: 'Home' },
        {
        link: '/products',
        text: 'Products',
        dropdown: [
            { link: '/category1', text: 'Category 1' },
            { link: '/category2', text: 'Category 2' },
            { link: '/category3', text: 'Category 3' },
        ],
        },
        { link: '/blog', text: 'Blog' },
        { link: '/contact', text: 'Contact Us' },
    ];
  </script>

  <Header {logoImageURL} {logoImageAlt} {urlStr} {secondaryMenu} {mainMenu} />

  <main>
    <Router {url}>
      {#route}
        <svelte:component this={component} {...props} />
      {/:else}
        <p>Page not found</p>
      {/route}
    </Router>
  </main>

  <style>
    /* Add global styles here */
  </style>
