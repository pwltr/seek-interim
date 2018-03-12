<?php

namespace App\Http\Controllers;

use App;
use Illuminate\Support\Facades\Cache;
use Illuminate\Http\Request;

class LocaleStringsController extends Controller
{
  public function index($locale) {
      // $strings = Cache::rememberForever('lang.js', function () {
      //
      // });

      $files   = glob(resource_path('lang/' . $locale . '/*.php'));
      $strings = [];

      foreach ($files as $file) {
          $name           = basename($file, '.php');
          $strings[$name] = require $file;
      }

      return $strings;

      header('Content-Type: text/javascript');
      echo('window.i18n = ' . json_encode($strings) . ';');
      exit();
  }
}
