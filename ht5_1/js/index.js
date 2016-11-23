
let element = document.getElementById('accordion'),
    current;


    element.addEventListener('click', e => {
       if (e.target.classList.contains('accordion__element-item--first')) {

           let element = e.target.nextElementSibling,
               polygon = element.nextElementSibling;

           if (element.classList.contains('show')) {
               current = null;
               element.classList.toggle('show');
               e.target.classList.toggle('accordion__opening');
               polygon.classList.toggle('accordion__polygon--opening');
           } else {
               if (current) {
                   current.classList.toggle('show');
                   current.previousElementSibling.classList.toggle('accordion__opening');
                   current.nextElementSibling.classList.toggle('accordion__polygon--opening');
               }
                   current = element;
                   current.classList.toggle('show');
                   e.target.classList.toggle('accordion__opening');
                   current.nextElementSibling.classList.toggle('accordion__polygon--opening');
           }
       }
    });
