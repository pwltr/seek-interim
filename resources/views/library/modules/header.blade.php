<header class="header">
  <div class="header-background">
    <img class="header-background-img preload" src="{{ asset('images/header-bg.jpg') }}" alt="">
  </div>

  <div class="header-foreground">
    <div class="outer-container">
      <div class="inner-container">
        <nav class="nav">
          <ul class="nav-list">
            <li class="nav-item">
              <a class="nav-item-link" href="#section-contact">Contact</a>
            </li>

            <li class="nav-item">
              <a class="nav-item-link" href="#section-store">Store</a>
            </li>

            <li class="nav-item">
              <a class="nav-item-link" href="#section-blog">Blog</a>
            </li>
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

  <div class="social-media">
    <a class="sm-item" href="#">
      Facebook
    </a>

    <a class="sm-item" href="#">
      Twitter
    </a>

    <a class="sm-item" href="#">
      Instagram
    </a>
  </div>
</header>
