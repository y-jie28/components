# components

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

<hr />

# Notes

## Understanding Servers
One main difference between servers and our computers is that servers don't have a GUI. Servers handles requests over the network. 

localhost: browser sends the request to our computers instead of a server located somewhere in the world. 

Vue CLI will run a server on our computers that can handle requests if we type in "localhost". __The server will respond with a HTML, CSS and JS file we have in our project.__

The servers will also watch for file changes in our project. After a file is updated and saved, the server will refresh the browser to reflect the change. 

The number after localhost is the port number. A port number could be thought as a door, e.g. door to kitchen, door to bedroom. The CLI will search for an unused port and reserve it to run our application locally. 

## Files
Section about files generated by the Vue CLI. 

### .gitignore
Tells git which files to ignore when pushing to GitHub. 

### babel.config
Preset for babel. More info about the preset can be found [here](​https://www.npmjs.com/package/@vue/babel-preset-app).

### package.json
The key is the __Vue CLI Packages in the__ "scripts" section. 

- @vue/cli-service: build and serve commands, helps build the project whether it is for development or production. 
- @vue/cli: additional commands for managing your project, to make working with Vue easier. 
- @vue/cli-service-global: allows you to use the build and serve commands globally. 

Contains config for "ESLint".

Vue CLI uses PostCSS internally. 
Although PostCSS config is not in the package.json, Vue will configure the PostCSS behind the scenes. 

## Directories
- node_modules
- public
- src

### node_modules
Contains the module installed for this project. It does not only contain webpack and babel, but Vue as well. 

### public
Contains the static assets like images and HTML file. 

### src
__Important.__ Most of applications' logic, templates, state managemnt, etc. will be in this directory. 

#### main.js
The createApp function from the Vue package and an object called __App__. 

__createApp__ creates the application. App is a Vue file, which is considered as a component. All components end with .vue extension. 

## Components
For a component to be valid, it must have the __template__ block. It can have one or multiple root element. 

The __name__ property can be added to a component. It is not required, but is useful when it comes to debugging. 
If no name is assigned, Vue will give it name "anonymous". 

## Component Styles
__style__ block is another important block in a Vue component. Just like __template__ and __script__ which you will always see in a Vue component. 

By applying styles to a HTML tag, it will be applied to all tags. There are two ways to solve this problem. One is by using __id__ and __classes__, another is something that Vue provides.

### Shadow DOM
- A way to isolate components from the regular DOM with its own stylings, events and structure. 
- Any data defined in a component is isolated to that component, same idea. 
- Not the Virtual DOM. A Virtual DOM is a JavaScript Object that is a copy of the Real DOM, while Shadow DOM is an isolated DOM from the real DOM. 

An attribute named __scoped__ can be added to the __style__ block, Vue will compile the template making sure the styles are only applicable to the component. 

```
Scoped CSS

When a <style> tag has the scoped attribute, its CSS will apply to the elements of the current component only. This is similar to the style encapsulation found in Shadow DOM. 
```

It is similar to Shadow DOM, but Vue does not use the Shadow DOM because not all browsers support Shadow DOM. 

## Using SASS in Components
Does not come installed with Vue CLI, can manually add to the project if SASS is preferred. 

```
npm install node-sass sass-loader --save-dev
```

Afterwards, add the following in the style block to tell Vue to compile the CSS in SASS: 

```
<style lang="scss"></style>
```

In this case the newest version of sass-loader (which is 11) doesn't work...downgrade it to 10 to have it working again. 

## Communicating Between Components
Lean how to pass down data to children components.

Component A (Root) -> Component B
                   -> Component C

Component A is the root or, __Parent__ component to Component B and Component C. Component B and Component C are known as __Siblings__ component to each other because they sit on the same level in the hierarchy. 

However, there is no way for Sibling components to send data to each other. Therefore, in order to send data, it should be stored in the App (Root) component, and send data down using __props__. 

## Props
Think __props__ as of customized attributes for components. It can be used to customize the behavior of a component. 

It is important to understand that the value that gets passed down as a prop will not be automaticaly interpreted as an expression. It needs to be binded if you want it to be an expression.

Use __:__ to bind. 

```
  <user :age="age"></user>
```

When the data inside the parent component changes, all children components would reflect the change too. But it does not necessarily work in the reverse. 

### The Limitations of Props
- We are not allowed to __mutate__ props. 
- Even if an update happens, we will not be able to hold onto the change. If there's an update in parent component, it will overwrite the change in the child component. 

We might want to update in the child component and have it reflected in all components including siblings component. We can emit events to update props. 

### Emitting Events
Emit - To produce or trigger an event. 

Only parent components can listen for events from children events. The method is not accessible to siblings component. 

Only need this process if need to update a prop. 

### Validating Props
- Can be useful for debugging an application. 

Can implement check on prop type (e.g. see if it is a number or string), require a prop to be passed down (using __required__), or have custom validator function. 

```
validator(value) {
    return value < 130; 
}
```

### Callback Functions
- An alternative solution for updating the data in parent component from the child component. 


#### Callback Functions vs Events
- Personal preference, there's no significant performance difference from using either one. 

According the Vue, it is recommended to use Events as most examples in the documentation uses events. Just to be consistent, probably better to use Events. 

There's one advantage to use events - it will be logged, making it slightly easier for debugging. 
