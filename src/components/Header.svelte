<!-- src/components/Header.svelte -->
<script>
    export let urlStr;
    const imagePath = 'logo.svg';

  </script>
<div class="container-fluid header-section">
    <div class="col-3" style="display: flex;
    vertical-align: middle;
    padding-left: 50px;
}">
        <img style="width: 160px;" src="/logo.svg" alt="My Image" />

        <!-- <img src={`public/${imagePath}`} alt="My Image" /> -->
    </div>
    <div class="col-5">
        <nav id="main-nav" class="navbar navbar-expand-lg navbar-light" style="margin-top: 23px; font-family:'DM sans'">

            <!-- Main Menu -->
          <ul class="triplea_main_nav_ul">
            <!-- Static Main Menu Items -->
            <li class:class="{{ 'nav-item': true, 'menu-item-active': urlStr === '/' }}">
              <a class="nav-link" href="/">Our Solutions</a>
            </li>
            <li class:class="{{ 'nav-item': true, 'menu-item-active': urlStr === '/products' }}">
              <a class="nav-link" href="/products">Company</a>
            </li>
            <li class:class="{{ 'nav-item': true, 'menu-item-active': urlStr === '/blog' }}">
              <a class="nav-link" href="/blog">Resources</a>
            </li>
            <li class:class="{{ 'nav-item': true, 'menu-item-active': urlStr === '/contact' }}">
              <a class="nav-link" href="/contact">Contact Us</a>
            </li>
          </ul>

      </nav>
    </div>
    <div class="col-4">
        <div class="row" style="margin-top: 23px;">
            <div class="col-4" style="padding-left: 20px;">
                <button class=" primary-btn">Log In</button>
            </div>
            <div class="col-4">
                <button class=" secondary-btn">Sign Up</button>
            </div>
        </div>
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
    .primary-btn{
        display: flex;
        width: 144px;
        height: 40px;
        padding: 8px 16px;
        justify-content: center;
        align-items: center;
        border-radius: 150px;
        background: var(--Primary-Colors-Spring-Green, #0F8);
        color: var(--Primary-Colors-Federal-Blue, #161141);
        text-align: center;
        /* DM Sans/(Reg) B3 */
        font-family: DM Sans;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px; /* 128.571% */
    }
    .secondary-btn{
        display: flex;
        width: 144px;
        height: 40px;
        padding: 8px 16px;
        justify-content: center;
        align-items: center;
        border-radius: 150px;
        border: 1px solid var(--Greyscale-Colors-White, #FFF);
        color: var(--Greyscale-Colors-White, #FFF);
        text-align: center;
        background: #161141;

        /* DM Sans/(Reg) B3 */
        font-family: DM Sans;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px; /* 128.571% */

    }
  </style>

