var CookieConsent = (function() {
  return {

    'cookieName': "cookieConsent",
    'cookieDurationInDays': 365,
    'cookieBannerDiv': "cookie-consent",

    'checkConsent': function() {
      // If DoNotTrack enabled don't track
      if (window.doNotTrack || navigator.doNotTrack || navigator.msDoNotTrack || 'msTrackingProtectionEnabled' in window.external) {
        if (window.doNotTrack == "1" || navigator.doNotTrack == "yes" || navigator.doNotTrack == "1" || navigator.msDoNotTrack == "1" || window.external.msTrackingProtectionEnabled()) {
          CookieConsent._closeBanner();
        }
      }
      // Previous consent
      else if (document.cookie.indexOf(CookieConsent.cookieName + '=1') > -1) {
        CookieConsent._closeBanner();
        CookieConsent._addAnalytics();
      } 
      // Previous reject
      else if (document.cookie.indexOf(CookieConsent.cookieName + '=0') > -1) {
        CookieConsent._closeBanner();
      }
    },
    
    '_closeBanner': function() {
      var element = document.getElementById(CookieConsent.cookieBannerDiv);
      element.parentNode.removeChild(element);
    },
    
    '_addAnalytics': function() {
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    
        ga('create', 'UA-164507052-1', 'auto');
        ga('set', 'anonymizeIp', true);
        ga('send', 'pageview');
    },

    'accept': function() {
      CookieConsent._closeBanner();
      document.cookie = CookieConsent.cookieName + "=1; path=/; max-age=" + CookieConsent.cookieDurationInDays*24*60*60;
      CookieConsent._addAnalytics();
    },

    'reject': function() {
      CookieConsent._closeBanner();
      document.cookie = CookieConsent.cookieName + "=0; path=/; max-age=" + CookieConsent.cookieDurationInDays*24*60*60;
    }
  }

})();

window.onload = function(){
  CookieConsent.checkConsent();
}