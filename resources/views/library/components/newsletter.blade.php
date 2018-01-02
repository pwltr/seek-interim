<div class="newsletter-signup js-newsletter-signup" data-state="inactive">
  <form class="newsletter-signup-form js-nsf" action="" method="post">
    {{ csrf_field() }}

    <input type="hidden" name="formID" value="nlform">
    <input id="nsf-mail" class="nsf-input" type="email" placeholder="E-Mail Address" value="">

    <button class="hc-btn nsf-btn js-nsf-btn" type="submit">
      <span class="nsf-btn-text">
        Notify me
      </span>

      <div class="loading-wrapper">
        <div class="loading-spinner"></div>
      </div>

      <span class="nsf-btn-text--success">
        Success!
      </span>
    </button>
  </form>

  <div class="nsf-status js-nsf-status"></div>
</div>
