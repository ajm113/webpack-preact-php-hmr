# Webpack Preact App with HMR with PHP

*This is simply a VERY stripped down version of the
[preact-boilerplate](https://github.com/developit/preact-boilerplate) by @developit
that only tests using PHP as a platform for Preact/Webpack to run on.*

This project is going to include a Dockerfile to run a small instance
of PHP on, just for demonstration purposes. It's recommended to use this project with **caution!**


## Installing Webpack/Preact

1. Clone:

```
git clone --depth 1 https://github.com/ajm113/webpack-preact-php-hmr.git webpack-preact-php-hmr
cd webpack-preact-php-hmr
```

2. Build

```
npm i
```

## Running Docker PHP Container (Optional)

1. Building container image.

```
docker build -t my-php-preact-app .
```

2. Running image.

```
docker run -d -p 80:80 --name webserver -v "$PWD/html":/var/www/html my-php-preact-app
```

## Running HMR w/ Webpack Proxy

1. Inside project root dir. Run this!
```
npm run dev
```

2. Start making changes to the app!

## Final Notes

This is just a test into Preact and PHP. You are free to make this project into your own!

I'll also include Webpack 3v branch if you wish to test with Webpack3.

## License

MIT
