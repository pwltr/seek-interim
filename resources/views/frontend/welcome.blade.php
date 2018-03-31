@extends('frontend.layout')

@section('title', 'home')

@section('content')
  <div id="ip-container" class="ip-container">
    {{-- @include('library.modules.intro') --}}

    <main class="ip-main">
      @include('library.modules.header')
      @include('library.modules.about-section')
      @include('library.modules.contact-section')
      @include('library.modules.footer')
    </main>
  </div>
@endsection

@section('scripts')
  <script src="{{ app()->getLocale() }}/js/lang.js"></script>
@endsection
