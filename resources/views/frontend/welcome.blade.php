@extends('frontend.layout')

@section('title', 'home')

@section('header')
  @include('library.modules.header')
@endsection

@section('content')
  @include('library.modules.newsletter-section')
@endsection

@section('footer')
  @include('library.modules.footer')
@endsection
