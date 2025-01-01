# Unhandled Error in Express.js Route Parameter

This repository demonstrates a common error in Express.js route handlers: the lack of error handling for invalid parameters.  Specifically, the `/users/:id` route doesn't validate the `id` parameter, leading to potential crashes or unexpected behavior if an invalid ID is provided.

## Bug

The `bug.js` file shows the problematic code.  The route handler attempts to use the `userId` from the request parameters without checking if it is valid. This is dangerous and leads to crashes when the id is not an integer or other unexpected value.

## Solution

The `bugSolution.js` file provides a solution. It adds error handling to check if the `userId` is a valid integer before processing it.  The solution demonstrates how to handle both missing and invalid parameters gracefully, returning appropriate error responses to the client.
