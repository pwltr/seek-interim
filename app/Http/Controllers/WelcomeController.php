<?php

namespace App\Http\Controllers;

use App;
use App\Subscriber;
use Illuminate\Http\Request;
use \DrewM\MailChimp\MailChimp;

class WelcomeController extends Controller
{
    public function index($locale = 'en') {
        App::setLocale($locale);

        return view('frontend.welcome', [
          'locale' => App::getLocale($locale)
        ]);
    }

    public function subscribeToNewsletter(Request $request) {
      $apiKey = config("newsletter.apiKey");
      $listID = config("newsletter.lists.subscribers.id");

      $email = $request->input('email');
      $first_name = $request->input('firstName');
      $last_name = $request->input('lastName');

      // Validate Email
      if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
          return response()->json(["error" => "Invalid Email"], 400);
      }

      $subscriberInDB = Subscriber::where('email', $email)->get();

      if (count($subscriberInDB) > 0) {
          return response()->json(["error" => "Member exists"], 400);
      }

      // Write to DB
      $subscriber = new Subscriber();
      $subscriber->email = $email;
      $subscriber->first_name = $first_name;
      $subscriber->last_name = $last_name;
      $subscriber->save();

      $mailchimp = new MailChimp($apiKey);

      $locale = App::getLocale();

      $result = $mailchimp->post("lists/$listID/members", [
        'merge_fields' => [
          'FNAME' => $first_name,
          'LNAME' => $last_name,
          'LOCALE' => $locale
        ],
        'email_address' => $email,
        'status' => 'subscribed'
      ]);

      if ($mailchimp->success()) {
        return response()->json(["success" => $result["status"]], 200);
      } else {
        return response()->json(["error" => $result["title"]], $result["status"]);
      }
    }
}
