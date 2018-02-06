@extends('frontend.layout')

@section('title', 'home')

@section('header')
  @include('library.modules.header')
@endsection

@section('content')
  @include('library.modules.about-section')
  @include('library.modules.contact-section')
@endsection

@section('footer')
  {{-- @include('library.modules.footer') --}}
@endsection
