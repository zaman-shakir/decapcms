<!-- src/components/Header.svelte -->
<script>
    export let urlStr;
    const imagePath = 'logo.svg';

  </script>
<div class="container-fluid header-section">
    <div class="col-3">
        <img src="/logo.svg" alt="My Image" />

        <!-- <img src={`public/${imagePath}`} alt="My Image" /> -->
    </div>
    <div class="col-5">
        <nav id="main-nav" class="navbar navbar-expand-lg navbar-light">

            <!-- Main Menu -->
          <ul class="triplea_main_nav_ul">
            <!-- Static Main Menu Items -->
            <li class:class="{{ 'nav-item': true, 'menu-item-active': urlStr === '/' }}">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class:class="{{ 'nav-item': true, 'menu-item-active': urlStr === '/products' }}">
              <a class="nav-link" href="/products">Products</a>
            </li>
            <li class:class="{{ 'nav-item': true, 'menu-item-active': urlStr === '/blog' }}">
              <a class="nav-link" href="/blog">Blog</a>
            </li>
            <li class:class="{{ 'nav-item': true, 'menu-item-active': urlStr === '/contact' }}">
              <a class="nav-link" href="/contact">Contact Us</a>
            </li>
          </ul>

      </nav>
    </div>
    <div class="col-4">
        &nbsp;
    </div>

</div>

  <style lang="scss">
    $primary-color: #FFF;
    $bg-primary : #161141 ;
    body{
        background-color: $bg-primary;
    }
    .header-section{
        min-height: 90px;
        display: flex;
        justify-content: space-evenly;
        flex-direction: row;
    }

    .container, .container-fluid {
      background-color: $bg-primary;
      color: $primary-color;
    }
    .triplea_main_nav_ul{
        display: flex;
        justify-content: space-evenly;
        list-style: none;
        width: 100%;
    }
  </style>

