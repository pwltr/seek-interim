<div class="newsletter-widget js-newsletter-widget" data-state>
  <form class="js-nw-form" action="" method="post">
    {{ csrf_field() }}

    <input type="hidden" name="formID" value="nlform">

    <div class="nw-body">
      <div class="nw-status js-nw-status"></div>

      <div class="nw-field form-field js-field">
        <input id="nw-mail" type="email" placeholder="E-Mail-Adresse" value="">
        <label for="nw-mail">E-Mail-Adresse</label>
      </div>
    </div>

    <button class="nw-btn js-nw-btn" type="submit">
      <span class="nw-btn-text">
        Jetzt Newsletter abonnieren!
      </span>

      <div class="loading-wrapper">
        <div class="loading"></div>
      </div>

      <span class="nw-btn-text--success">
        Abonniert!
      </span>
    </button>
  </form>
</div>
