# VTRIL

**VTRIL** is a Vite Typescript React Inertia Laravel boilerplate.

The aim is to replace the default Laravel Mix which uses webpack with **vite**.
Vite is very much faster than Laravel Mix as it bundles dependencies with _esbuild_.

This boilerplate uses _Ziggy_ for frontend routing.

### Run Locally

-   Click Use this template at the top of the Repo
-   Clone your generated repo to your local system

-   Go to the project directory

```bash
    cd my-project
```

-   Install PHP Composer dependencies

```bash
    composer install
```

-   Create Environment config

```bash
    cp .env.example .env
```

-   Generate key

```bash
    php artisan key:generate
```

-   Install NPM dependencies

```bash
    npm install
    #or
    yarn
```

-   Start the bundle server

```bash
    npm run dev
    #or
    yarn dev
```

-   If you want typescript warnings in your terminal, use

```bash
    npm run devt
    #or
    yarn devt
```

-   Start the Laravel App

```bash
    php artisan serve
```
