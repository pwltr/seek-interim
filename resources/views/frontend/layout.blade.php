<!doctype html>
<html class="no-js" lang="{{ app()->getLocale() }}">
    <head>
        @include('frontend.head.meta')
        @include('frontend.head.favicon')
        {{-- @include('frontend.head.social') --}}
        <link rel="stylesheet" href="{{ asset('css/main.css') }}">
        <script src="{{ asset('vendor/modernizr.custom.js') }}"></script>

        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-115444729-1"></script>

        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-115444729-1');
        </script>
    </head>

    <body>
      <div class="page-wrapper page-@yield('title')">
        @yield('content')
      </div>

      <script src="{{ asset('js/manifest.js') }}"></script>
      <script src="{{ asset('js/vendor.js') }}"></script>
      <script src="{{ asset('js/main.js') }}"></script>

      @yield('scripts')
    </body>
</html>
