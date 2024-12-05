
# Logasm  - Logging That Gives You Goosebumps


Welcome to **Logasm**, the logger that doesn’t care if your app is crashing — it’s here to entertain and roast you along the way. Think of it as the stand-up comedian of logging libraries. Sure, it’ll help you debug, but it might also hurt your feelings. 🫢

## Why Logasm? 🤔

Let’s face it: debugging is stressful. Logs are usually dull. **Logasm** makes sure your logs are as entertaining as they are useful. It's like having a comedian whispering jokes while you're fixing that "undefined is not a function" error.

With Logasm, you'll:
- Logs that *actually* make you laugh while your code is on fire? 🔥
-  A logger that’s more sarcastic than your college roommate?😎
-  Debugging messages that make you question your life choices? ☠️

**Logasm** has you covered. If you can handle the sass, you’ll love it. (If you can’t… well, maybe stick to `console.log` 🥱.)

## Features 🌟
- **OopsPrint**: Print logs that might solve your problem or roast you for having it in the first place.  
- **OopsWare**: Express middleware that handles errors with a dash of humor and a side-eye.  
- **ES Modules Only**: Logasm is designed to work with ES Modules for the modern JavaScript ecosystem. Sorry, CommonJS—this one's for the cool kids.
## Installation 🚀


Don’t overthink it. Just install it.  
 
```
npm install logasm 

```
    ## Usage 🛠️
Here’s how you can sprinkle some Logasm magic into your project:

### Basic Logging
Start logging like a pro (or a clown, your choice):


```javascript
import { oopsPrint } from 'logasm';

oopsPrint('The server is waking up. Please hold your applause!', { 
  details: { port: 3000, env: 'development' } 
});
```
**Custom Heading for Logs:** The `oopsPrint` now accepts a dynamic heading for logs (`heading: 'YOUR_CUSTOM_HEADING'`).
```javascript
oopsPrint('Server started successfully', { heading: 'SUCCESS' }); 
```


## Express Middleware - Handle Errors Like a Boss
Plug in OopsWare and handle errors without breaking a sweat:

```javascript 
import { OopsWare } from 'logasm';
app.use(OopsWare); // Now your errors are handled....
```

Example: 

```javascript  
app.get("/error", (req, res, next) => {
  try {
    throw new Error("Something went wrong!");
  } catch (error) {
    next(error);
  }
});

```

## FAQ

#### ⚰️ Why does Logasm roast me when I mess up?

Because someone has to.

#### ⚰️Can I use this at work?

Depends. Do you like your coworkers?

#### ⚰️Is this the most useful logger out there?
No. But it’s definitely the most fun.

#### ⚰️Does it solve all my problems?

Are you dumb...?

## WARNING ⚠️
If you’re easily offended, Logasm might not be for you. It logs with a touch of humor and a pinch of shade. If you can’t handle a little tough love, go back to using console.log and let us know how that works out. 🫡

## API 🔧
`OopsPrint(message, options)`
Logs a message. May or may not be polite about it.

message: What you’re hoping will help (but probably won’t).
options: Extra details that Logasm might ignore entirely.
`OopsWare(err, req, res, next)`
Middleware for Express to make sure your errors are logged, mocked, and then handled.
## License 📜
MIT License.

## Looking for Contributions!

I welcome contributions to make Loggasm even better. If you have ideas, bug fixes, or want to add a new feature, feel free to open an issue or submit a pull request. Let's make this library even more awesome, together! 💻✨

