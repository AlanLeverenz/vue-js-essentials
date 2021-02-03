new Vue({
    el: '#app',
    data: { // initialize our list of 'ingredients'
      textInput: ''
      
    },
    computed: { // turn data into viewable values
      identicon: function() {
        return jdenticon.toSvg(this.textInput, 200);
      }
    },    
    methods: { // use these functions to change data
      onInput: function(event) {
        this.textInput = event.target.value;
      }
    }
  });