🐋🐋🐋 DOCKER INSTRUCTION 🐋🐋🐋

# build image with command

docker build -t strapiapp:volumes .

# after successfull building image you can start your container with command

docker run -d -p 1337:1337 -v `path to your local directory with this project`:/opt/src -v /opt/src/node_modules -v strapiapp:/opt/src/volumes --name strapiapp strapiapp:volumes

### PLEASE, DON'T FORGET TO SET THE PATH TO YOUR LOCAL DIRECTORY IN PREVIOUS COMMAND!

-d - container running detached, so you would't see the process in console
-p 1337:1337 - ports local:docker
-v /path/ - volumes we are creating
--name strapiapp - name for container
strapiapp:volumes - set builded image for container

# login to app

follow link with registration token
enter your email (should be equal the one you've sent to first admin)
enjoy!

# what does Dockerfile mean

`FROM node:18` - image we are using in docker
`RUN apt-get update && apt-get install libvips-dev -y` - install libraries for sharp compatibility (some of npm modules are using that)
`ARG NODE_ENV=development` (environment can be changed to 'production' by command line)
`ENV NODE_ENV=${NODE_ENV}`
`WORKDIR /opt/` - working directory
`COPY ./package.json ./yarn.lock ./` - copy needed files for installation in docker container
`ENV PATH /opt/node_modules/.bin:$PATH` - path for docker where to find node modules
`RUN yarn config set network-timeout 600000 -g && yarn install` - configure yarn if it takes a long time to install, then run yarn install
`WORKDIR /opt/src` - set workdir for our app
`COPY ./ .` - copy files (the first one - what to copy, the last one - where to copy)
`RUN yarn build` - building project
`EXPOSE 1337` - set port
`VOLUME [ "opt/src/volumes" ]` - path to volumes
`CMD [ "yarn", "develop" ]` - command to start our strapi project (the same as 'yarn develop', check package.json: scripts.develop)

---

# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project. Find the one that suits you on the [deployment section of the documentation](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html).

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://docs.strapi.io) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
