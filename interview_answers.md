# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve? it solves sharing state down a component tree and it prevents prop drilling

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application? actions: its basically an object that must have a type and an optional payload. reducers: a reducer is basically a function that uses action it receives to perform changes in an app state. store: this contains the entire state of an application

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`? allows you to write action creators that return a function instead of an action

4. What is your favorite state management system you've learned and this sprint? Please explain why! I have no favourite state management at the monent but i will say react reducers due to it being more simple
