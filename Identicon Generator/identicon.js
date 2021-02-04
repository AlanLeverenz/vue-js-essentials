new Vue({
    el: '#app',
    data: { // initialize our list of 'ingredients'
      textInput: ''
    },
    computed: { // turn data into viewable values
      identicon: function() {
        return jdenticon.toSvg(this.textInput, 200);
      },
    },    
    methods: { // use these functions to change data
      onInput: function(event) {
        this.textInput = event.target.value;
      }
    },
    template: `
    <div>
      <h3>My Identicon Generator</h3>
  
      <div>
        Input: 
        <input v-on:input="onInput"/>
      </div>
  
      <div>
        Output: 
        <div v-html="identicon"></div>
      </div>
    </div>
    `
  });