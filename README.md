# custom-errors
Create simple error objects with custom properties for reuse in your code.

# Not for production use
This is intended to aid in development.  It includes the `stack` trace in the response and so unless its modified to remove that parameter or make it properly conditional based on env, this is not for production use.

# Example

```typescript
import * as CustomError from 'custom-errors'

let msgObj = {
  message: 'Custom error message',
  display_message: 'Separate message to potentially display to an end user'
}

// Multiple boilerplate error objects like:
// Validation, Unauthorized, TokenExpired, etc...

console.error(CustomError.Validation(msgObj))

// will look something like the following
{
    name: 'Validation Failed',
    message: 'Custom error message',
    display_message: 'Separate message to potentially display to an end user',
    status: 400,
    err: {newly created Error Object to obtain a stack},
    stack: err.stack
}
```
