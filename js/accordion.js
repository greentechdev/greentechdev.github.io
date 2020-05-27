//(function() {


  // Accordion hide/show
  var toggleAccordion = function toggleAccordion() {
                
    let isTrue = this.parentElement.classList.toggle('open');

    if (isTrue) {
        this.nextElementSibling.style.display = 'block';
    } else {
        this.nextElementSibling.style.display = '';
    }

  }  
//})();


/*

if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }

  */