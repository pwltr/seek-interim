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
      <h1 class="header-logo">
        <svg width="100%" height="100%" viewBox="0 0 566.93335 604.71997">
           <g transform="matrix(1.3333333,0,0,-1.3333333,0,604.72)">
             <g transform="scale(0.1)">
               <g class="logo">
                 <path d="m 3488.76,4008.57 h -411.08 c -71.31,0 -139.61,-22.03 -197.45,-63.68 L 1182.73,2722.96 c -2.48,-1.77 -5.4,-2.71 -8.46,-2.71 H 763.199 c -7.996,0 -14.5,6.5 -14.5,14.5 v 935.82 c 0,7.98 6.504,14.49 14.5,14.49 H 1640 l 449.17,323.33 v 0.18 H 763.199 c -186.375,0 -338.008,-151.64 -338.008,-338 v -935.82 c 0,-186.38 151.633,-338.01 338.008,-338.01 h 411.071 c 71.31,0 139.61,22.02 197.47,63.68 l 1697.5,1221.93 c 2.42,1.75 5.42,2.71 8.44,2.71 h 411.08 c 8.01,0 14.5,-6.51 14.5,-14.49 v -935.82 c 0,-8 -6.49,-14.5 -14.5,-14.5 h -876.74 l -449.23,-323.37 v -0.14 h 1325.97 c 186.37,0 338.02,151.63 338.02,338.01 v 935.82 c 0,186.36 -151.65,338 -338.02,338" />
                 <path d="m 1739.8,1053.23 v 165.12 h 220.21 v 101.09 H 1739.8 v 111.21 h 220.21 v 101.1 h -255.52 c -36.27,0 -65.78,-29.51 -65.78,-65.79 v -448.04 c 0,-36.279 29.51,-65.791 65.79,-65.791 h 255.52 V 1053.23 H 1739.8" />
                 <path d="m 2580.26,1430.65 v 101.1 h -255.51 c -36.27,0 -65.79,-29.51 -65.79,-65.79 v -448.04 c 0,-36.279 29.52,-65.791 65.79,-65.791 h 255.51 v 101.101 h -220.2 v 165.12 h 220.2 v 101.09 h -220.2 v 111.21 h 220.2" />
                 <path d="m 3234.41,952.129 -201.77,292.701 194.51,286.92 H 3105.08 L 2946.41,1297.8 v 233.95 H 2845.3 l 0.02,-579.621 h 101.09 v 239.651 c 27.96,-36.62 98.64,-139.36 165.83,-239.651 h 122.17" />
                 <path d="m 1262.74,952.129 h -245.18 v 101.101 h 221.76 v 78.62 l -180.68,140.07 c -24.58,19.04 -39.26,48.98 -39.26,80.12 v 102.04 c 0,42.83 34.85,77.67 77.67,77.67 h 243.63 v -101.1 h -220.2 v -78.61 l 180.68,-140.09 c 24.58,-19.06 39.26,-48.99 39.26,-80.1 V 1029.8 c 0,-42.839 -34.85,-77.671 -77.68,-77.671" />
               </g>
            </g>
          </g>
        </svg>
      </h1>

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
