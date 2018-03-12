<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('{locale?}', 'WelcomeController@index');
Route::get('{locale}/imprint', 'PagesController@imprint');
Route::get('{locale}/terms', 'PagesController@terms');

// Localization
Route::get('{locale}/js/lang.js', 'LocaleStringsController@index');

Route::post('/', 'WelcomeController@subscribeToNewsletter');
