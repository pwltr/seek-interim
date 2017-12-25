<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        @include('frontend.head.meta')
        {{-- @include('frontend.head.favicons') --}}
        {{-- @include('frontend.head.social') --}}

        <title>SEEK | Welcome</title>

        <link rel="stylesheet" href="{{ asset('css/main.css') }}">
    </head>

    <body>
      <div class="page-wrapper @if (!empty($pageTitle)){{ $pageTitle }}@endif">
        @yield('header')

        <main class="page-content">
          @yield('content')
        </main>

        @yield('footer')
      </div>

      <script src="{{ asset('js/frontend/manifest.js') }}"></script>
      <script src="{{ asset('js/frontend/vendor.js') }}"></script>
      <script src="{{ asset('js/frontend/main.js') }}"></script>

      @yield('scripts')
    </body>
</html>
