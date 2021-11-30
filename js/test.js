
   $(function () {
       var currentHash = "#one"
       $(document).scroll(function () {
           $('.hash').each(function () {
               var top = window.pageYOffset;
               var distance = top - $(this).offset().top;
               var hash = $(this).attr('href');

               if (distance < 30 && distance > -30 && currentHash != hash) {
                   alert(hash);
                   currentHash = hash;
               }
           });
       });
   });
