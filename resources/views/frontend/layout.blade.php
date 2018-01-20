<!doctype html>
<html class="no-js" lang="{{ app()->getLocale() }}">
    <head>
        @include('frontend.head.meta')
        @include('frontend.head.favicon')
        {{-- @include('frontend.head.social') --}}
        <link rel="stylesheet" href="{{ asset('css/main.css') }}">
        <script src="js/modernizr.custom.js"></script>
    </head>

    <body>
      <div id="ip-container" class="ip-container page-wrapper page-@yield('title')">
        @include('library.modules.intro')

        <main class="ip-main">
          @yield('header')
          @yield('content')
          @yield('footer')
        </main>
      </div>

      <script src="{{ asset('js/manifest.js') }}"></script>
      <script src="{{ asset('js/vendor.js') }}"></script>
      <script src="{{ asset('js/main.js') }}"></script>

      @yield('scripts')
    </body>
</html>
