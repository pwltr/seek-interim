<header class="header">
  <div class="header-background">
    <picture>
        <source
                srcset="{{ asset('images/header-bg-mobile.jpg') }}"
                media="(max-width: 640px)"/>
        <source
                srcset="{{ asset('images/header-bg-tablet.jpg') }}"
                media="(min-width: 641px)"/>
        <source
                srcset="{{ asset('images/header-bg-desktop.jpg') }}"
                media="(min-width: 1024px)"/>
        <!--[if IE 9]></audio><![endif]-->
        <img src="{{ asset('images/header-bg-desktop.jpg') }}"
             class="header-background-img preload" alt=""/>
    </picture>
  </div>

  <div class="header-foreground">
    <div class="outer-container">
      <div class="inner-container">
        <nav class="nav">
          <ul class="nav-list">
            <li class="nav-item">
              <a class="nav-item-link" href="#section-about">about</a>
            </li>

            <li class="nav-item">
              <a class="nav-item-link" href="#section-contact">Contact</a>
            </li>

            {{-- <li class="nav-item">
              <a class="nav-item-link" href="#section-blog">Blog</a>
            </li> --}}
          </ul>
        </nav>
      </div>
    </div>

    <div class="header-content">
      <span class="hc-text">
        Activewear for the modern urbanite that breaks through common thought patterns.
        <br>
        Where premium performance meets lifestyle. Honest, stylish, versatile.
      </span>

      <h2 class="hc-title">
        Coming Soon!
      </h2>

      @include('library.components.newsletter')
    </div>
  </div>

  {{-- <div class="social-media">
    <a class="sm-item" href="#">
      Facebook
    </a>

    <a class="sm-item" href="#">
      Twitter
    </a>

    <a class="sm-item" href="#">
      Instagram
    </a>
  </div> --}}
</header>
