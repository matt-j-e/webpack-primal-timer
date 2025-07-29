# Learning how to set up an app to use Webpack

The purpose of this repository is to work through the process of converting a basic HTML, CSS & JS app, with all JS imported into the HTML via `<script>` tags, into an app that can make use of Webpack.

It should be possible to work through the commits and see the process. Each commit is heavily commented in an effort to document what I did at each step.

## Running the app

**Dev mode** `npm start` will kick off a dev server with the app running on port 8080

**Building for production** `npm run build` will generate new files in the `dist` directory. Four files are generated:

- index.html
- index.[hash].js
- timer.html
- timer.[hash].js

All 4 files need to be loaded onto any server where you want to run the app.
