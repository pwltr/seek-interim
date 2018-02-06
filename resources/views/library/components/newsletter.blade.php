<div class="newsletter-signup js-newsletter-signup" data-state="inactive">
  <form class="newsletter-signup-form js-nsf" action="" method="post">
    {{ csrf_field() }}

    <input type="hidden" name="formID" value="nlform">

    <div class="nsf-view nsf-view-1 js-nsf-view-1">
      <input id="nsf-mail" class="nsf-input" type="email" placeholder="Email address" value="">

      <button class="hc-btn nsf-btn js-nsf-btn-1" type="button">
        <span class="nsf-btn-text">
          Notify me
        </span>
      </button>
    </div>

    <div class="nsf-view nsf-view-2 js-nsf-view-2">
      <input id="nsf-firstname" class="nsf-input" type="text" placeholder="First name" value="">
      <input id="nsf-lastname" class="nsf-input" type="text" placeholder="Last name" value="">

      <button class="nsf-btn js-nsf-btn-2" type="submit">
        <span class="nsf-btn-text">
          Send
        </span>

        <div class="loading-wrapper">
          <div class="loading-spinner"></div>
        </div>
      </button>
    </div>

    <div class="nsf-view nsf-view-3 js-nsf-view-3">
      Thank you! You will hear from us soon.
    </div>
  </form>

  <div class="nsf-status js-nsf-status"></div>
</div>
