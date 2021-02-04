# vue-js-essentials

Vue JS Essentials with Vuex and Vue Router course

Steven Grider course exploring Vue JS.

Vue HTML Templates (DOM)
Vue JS Instances

JS Instance:
Element - refers to template element by id
Method - defines functions, named in html
Directive - template syntax inside of Vue (output)

Imperative vs Declarative

Imperative process:
step by step directions : recipe
1 Detect user input
2 Get input text
3 Use text to do something
4 Show the result

Declarative process:
initial state (variables)
rules that are tested and processed

1 initial state or 'data'
Rules (with properties)
2 if user enters text, updates data (methods or functions)
3 if template is rendered, consumes data (computed property)
4 if input is updated, rerender the template (automatic result)

Vue API
Data -> defines the 'initial state' of our Vue instance (properties)
Methods -> defines the different ways our state can change
Computed -> defines how to turn the current data into viewable results

Data -> how everything starts (defining variables)
Methods -> changes data (define functions)
Computed -> turns data into viewable stuff

Only need computed functions when necessary
Can insert data properties or data functions into output without calculating some other outcome
No need for "this."

Interpolated values in tempates can have simple javascript expressions - string interpolation (no if's and for loops)

