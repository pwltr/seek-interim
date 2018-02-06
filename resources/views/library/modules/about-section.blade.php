<section class="about-section" id="section-about">
  <div class="outer-container">
    <div class="inner-container">
      <h2 class="section-title">
        About Us
      </h2>

      <picture>
          <!--[if IE 9]><audio><![endif]-->
          <source
                  data-srcset="{{ asset('images/about.jpg') }}"
                  media="(max-width: 640px)"/>
          <source
                  data-srcset="{{ asset('images/about.jpg') }}"
                  media="(min-width: 641px)"/>
          <source
                  data-srcset="{{ asset('images/about.jpg') }}"
                  media="(min-width: 1024px)"/>
          <!--[if IE 9]></audio><![endif]-->
          <img src="{{ asset('images/about.jpg') }}"
               class="about-section-img preload" alt=""/>
      </picture>

      <p class="section-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        <br><br>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  </div>
</section>
