# Installation

After downloading the file from Themeforest, You will find SuperProps.zip file. Then unzip the SuperProps.zip and run the following commands on SuperProps folder to get started with the project.

```
yarn
```

```
// For starting GatsbyJs Server run
yarn gatsby-dev
```

GatsbyJs server will start in `localhost:8000`

# Stack I Have Used

1. Lerna (A tool for managing JavaScript projects with multiple packages. https://lernajs.io)
2. Yarn Workspace
3. React Js and Next Js
4. Gatsby Js
5. Styled System and Styled Components
6. Firebase Deployment.
7. Vercel Deployment.

# Development

Follow the below procedure to go with the development process.

# Explaining Containers

In the `containers` directory you will get folder for our every template. If you want to use App template. Then in the `Portfolio` directory you will get folders containing different section of the template like `Banner`, `Footer`, `Testimonial`, `Navbar` etc.

All of these containers contains regular reactjs code.

# Deployment

For deploying your final project you have to build your project first. To build the project you have to follow below procedure.

### GatsbyJs

Run the below command on

```
yarn gatsby-build

// To check the build version locally run below command
// Not necessary if you don't want to check on your local.

yarn gatsby-serve
```

If you run `yarn gatsby-serve` then the build version the the project will start in `localhost:9000` . Navigate to the url you will get your site up and running.

## Running with Docker

To run the SuperProps Gatsby.js app in docker

```
yarn gatsby-build
docker build -t superprops/landing-gatsby -f ./packages/landing-gatsby/Dockerfile .
docker run -it -p 8000:8000 superprops/landing-gatsby:latest
open http://localhost:8000
```

# Deployment Support

## Netlify

At first, open an account on netlify and go to `sites` tab.

### GatsbyJs

If you want to host the `gatsbyjs` project, go to your command line and run this command on `packages/landing-gatsby` directory.

```
yarn build
```

After running above command go to `landing-gatsby` folder. You will find a `public` folder
there. Drag and drop this `public` folder on netlify `sites` tab.
