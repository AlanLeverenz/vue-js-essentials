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

Vue Component: class
Represents a set of rules for getting content on the screen and how users can interact with it.

Vue Instance: class instance
An 'instance' of a Vue Component

Component Vue File:
Has template, script, and style elements
Need to match script method to a template directive

Event emitters:
Native event (html)
Vue-specific event


Directive for input:
@input: or v-on:input

Communicate parent to child by passing props
Communicate child to parent by emitting events

Vue Instance can return an object or a function
    => data: textInput: ''

Vue Component must return a function
    => data: function() { textInput: ''} }

Template directives:
v-bind:childVideos="parentVideos"

( : = v-bind )
( @ = v-on: )

left side is what appears in the child
right side is what appears in the parent

myVideos exists in the parent
    data() {
        return { parentVideos: [] }
    },

Cycle of events and props
VideoListItem: emit, VideoList: listen/emit, Parent: listen/data
Parent: props -> VideoDetail

images project ===================

Vuex store includes:
state, getters, mutations, actions

Map Actions:
import mapActions into component
define action to call in methods
setup mapActions that will be exported
pass in array with list of strings of all actions
(Vuex will look at all the actions in the module)

Vue Router library:
can initiate actions based on the current URL

Wiring up a Vue Router:
1 create Vue Router instance, tell it about the routes
2 tell Vue instance that the Router exists
3 tell Vue Router where to put a component when it matches a route

By default, Vue Router applies a Hash Router (localhost: 8080/#MY/SPECIAL/ROUTE) right of hash
Browser Router inserts route before the hash (localhost: 8080:/MY/SPECIAL/ROUTE#/other/stuff) left of hash

Lifecycle events: (commponent rendering)
1 User visits /oauth2/callback#access_token=...
2 Router shows AuthHandler component on screen
3 AuthHandler instantly calls 'finalizeLogin' action
4 'finalizeLogin' extracts the access token and calls 'setToken' mutation

Route -> Component:
/ -> ImageList
/upload -> UploadForm
/oauth2/callback -> AuthHandler (extract token from URL, finalizeLogin)
Note: Based on URL, VueRouter will take a component and provide it to the 'App' component.

Avoid using anchor tags because they will refresh the whole page. Instead, use VueRouter.
Login/logout are not navigating so can use anchor tags.

'commit' updates the state inside the module
