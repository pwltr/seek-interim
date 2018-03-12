@extends('frontend.layout')

@section('title', 'terms')

{{-- @section('header')
  @include('library.modules.header')
@endsection --}}

@section('content')
  <div class="outer-container">
    <div class="page-footer inner-container">
      <h1 class="page-title">
        Imprint
      </h1>

      <p class="page-footer-text">
        Christian Fleck
        <br>2295 Oberweiden
        <br>Sonnwendgasse 18 | Austria
        <br>
        <br>Tel: 0043/69910517414
        <br>
        <br>office@seek-athletics.com
        <br>
        <br>UID-Nr: ATU72658778
        <br>
        <br>Mitglied der WKÖ, WKNÖ, Landesinnung Handel
        <br>
        <br>Gewerbeordnung: www.ris.bka.gv.at
        <br>BH Gänserndorf
        <br>
        <br>Verbraucher haben die Möglichkeit, Beschwerden an die Online Streitbeilegungsplattform der EU zu richten: http://ec.europa.eu/odr.
        <br>Sie können allfällige Beschwerde auch an die oben angegebene E-Mail- Adresse richten.
        <br>
        <br>Für den Inhalt verantwortlich: Christian Fleck
        <br>
        <br>Website by: Philipp Walter
      </p>
    </div>
  </div>
@endsection

@section('footer')
  @include('library.modules.footer')
@endsection
