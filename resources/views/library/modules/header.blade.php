<header class="header">
  <div class="header-background">
    <picture>
        <source srcset="{{ asset('images/header-bg-mobile.jpg') }}"
                media="(max-width: 640px)"/>
        <source srcset="{{ asset('images/header-bg-tablet.jpg') }}"
                media="(max-width: 1023px)"/>
        <source srcset="{{ asset('images/header-bg-desktop.jpg') }}"
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
              <a class="nav-item-link" href="#section-about">
                {{ __('navigation.about') }}
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-item-link" href="#section-contact">
              {{ __('navigation.contact') }}</a>
            </li>

            {{-- <li class="nav-item">
              <a class="nav-item-link" href="#section-blog">
                {{ __('navigation.blog') }}
              </a>
            </li> --}}
          </ul>
        </nav>
      </div>
    </div>

    <div class="header-content">
      <span class="hc-text">
        {{ __('header.text.line1') }}
        <br>
        {{ __('header.text.line2') }}
      </span>

      <h2 class="hc-title">
        {{ __('header.coming_soon') }}
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
