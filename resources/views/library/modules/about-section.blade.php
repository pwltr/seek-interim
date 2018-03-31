<section class="about-section" id="section-about">
  <div class="outer-container">
    <div class="inner-container">
      <h2 class="section-title">
        {{ __('about.title') }}
      </h2>

      <span class="section-subtitle">
        {{ __('about.subtitle') }}
      </span>

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
          <img data-src="{{ asset('images/about.jpg') }}"
               class="about-section-img preload" alt=""/>
      </picture>

      <div class="cms-content">
        {!! __('about.text') !!}
      </div>

      {{-- @include('library.components.newsletter') --}}
    </div>
  </div>
</section>
