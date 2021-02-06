const vm = new Vue({
    el: '#root',
    data: { date: new Date().getDay()
    },
    template: `
     <div class="date">
       Today is {{ date === 5 ? 'friday' : 'not friday' }}
     </div>
    `
 });