<?php

namespace App\Http\Controllers;

use App\Subscriber;
use Illuminate\Http\Request;
use \DrewM\MailChimp\MailChimp;

class WelcomeController extends Controller
{
    public function index() {
        return view('frontend.welcome');
    }

    public function subscribeToNewsletter(Request $request) {
      $apiKey = config("newsletter.apiKey");
      $listID = config("newsletter.lists.subscribers.id");

      $email = $request->input('email');

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
      $subscriber->save();

      $mailchimp = new MailChimp($apiKey);

      $result = $mailchimp->post("lists/$listID/members", [
        'email_address' => $email,
        'status'        => 'subscribed'
      ]);

      if ($mailchimp->success()) {
        return response()->json(["success" => $result["status"]], 200);
      } else {
        return response()->json(["error" => $result["title"]], $result["status"]);
      }
    }
}
