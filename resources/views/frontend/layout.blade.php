<!doctype html>
<html class="no-js" lang="{{ app()->getLocale() }}">
    <head>
        @include('frontend.head.meta')
        @include('frontend.head.favicon')
        {{-- @include('frontend.head.social') --}}
        <link rel="stylesheet" href="{{ asset('css/main.css') }}">
        <script src="vendor/modernizr.custom.js"></script>

        <!-- Global site tag (gtag.js) - Google Analytics -->
        {{-- <script async src="https://www.googletagmanager.com/gtag/js?id=UA-115444729-1"></script>

        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-115444729-1');
        </script> --}}

        <script type="text/javascript">
          console.log("GA einbinden");
        </script>
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

      <script src="{{ app()->getLocale() }}/js/lang.js"></script>
      <script src="{{ asset('js/manifest.js') }}"></script>
      <script src="{{ asset('js/vendor.js') }}"></script>
      <script src="{{ asset('js/main.js') }}"></script>

      @yield('scripts')
    </body>
</html>
