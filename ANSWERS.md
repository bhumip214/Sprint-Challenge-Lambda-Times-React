1.  What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
    ==> Proptypes are used to check what type of props is being passed to a component. As we know that Javascript is dynamic in writting which creates more possibility of errors while building large scale applications that can lead to more problems in our programs. So basically, it is important to check type to avoid errors and/or catch errors before they get worse.

2.  Describe a life-cycle event in React?
    ==> React components can defined as classes or functions and the methods that you can use on these components are called Lifecycle events. These methods can be called during the lifecycle of a component, and they allow you to update the UI and application states. There are three phases of the React component lifecycle: Mounting, Updating, ad Unmounting.

         - Mounting => contructor => render => React Updates DOM => componentDidMount
         - Updating => [NewProps or setState()] => render => DOM => componentDidUpdate
         - Unmounting => componentWillUnmount

3.  Explain the details of a Higher Order Component?
    ==> Higher Order Component is a component or function that takes in an another component as an argument and returns a new component with added functionality. Basically, it is a pattern that helps us extend the functionality, usually to share common logic.

4.  What are three different ways to style components in React? Explain some of the benefits of each.
    ==> 1) CSS - It is easy to maitnain and update, greater accessibility, and greater consistency in design.
    2. Styled-components - It is extremely easy, highly adaptable, and resusable.
    3. Reactstrap or bootstrap - It is easy to learn or use, numerous useful tools, time-saving, and most productive way to design web page.
