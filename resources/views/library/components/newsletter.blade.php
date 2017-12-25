<div class="newsletter-form js-newsletter-form" data-state>
  <form class="js-nlf-form" action="" method="post">
    {{ csrf_field() }}

    <input type="hidden" name="formID" value="nlform">

    <div class="nlf-body">
      <div class="nlf-status js-nlf-status"></div>

      <div class="nlf-field form-field js-field">
        <input id="nlf-mail" type="email" placeholder="E-Mail-Adresse" value="">
        <label for="nlf-mail">E-Mail-Adresse</label>
      </div>
    </div>

    <button class="nlf-btn js-nlf-btn" type="submit">
      <span class="nlf-btn-text">
        Jetzt Newsletter abonnieren!
      </span>

      <div class="loading-wrapper">
        <div class="loading"></div>
      </div>

      <span class="nlf-btn-text--success">
        Abonniert!
      </span>
    </button>
  </form>
</div>
