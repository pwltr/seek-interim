<?php

namespace App\Http\Controllers;

use App;
use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function imprint($locale) {
        App::setLocale($locale);

        return view('frontend.imprint', [
          'locale' => App::getLocale($locale)
        ]);
    }

    public function terms($locale) {
        App::setLocale($locale);

        return view('frontend.terms', [
          'locale' => App::getLocale($locale)
        ]);
    }
}
