## bug fix
update @ionic\vue-router on \node_modules\@ionic\vue-router\dist\index.js:183:31

replace line 183 with the below line , otherwise in SSR mode the server will throw error.

`const replaceAction = opts.history.state.replaced ? "replace" : undefined;`

## update
The change is updated and merged and will be available in @ionic\vue-router@5.6.7 soon

# Enjoy 
