# Javascript.af

Javascript af is a platform for developers to share their great work.

## Team

[Jesse R Weigel](https://github.com/JesseRWeigel) (Founder / Project Manager),

[Jvscrpt.r](https://github.com/jvscrptr) (Co-Founder / Frontend Dev),

[pantharshit00](https://github.com/pantharshit00) (Co-Founder / Fullstack Dev)

[Nicky Meuleman](https://github.com/NickyMeuleman) (Fullstack Dev)

# Docs

## Getting started

This repository uses a monorepo to manage several parts of the application. [yarn](https://yarnpkg.com) needs to be installed as it manages the monorepo structure.

1.  Fork and Clone the repo

    - Fork this repo via GitHub
    - Clone that fork to your machine

    ```sh
    git clone https://github.com/<YOUR USERNAME>/javascript-af-ts
    cd javascript-af-ts
    ```

2.  Install all of the dependencies

    > **Note**: Windows user are required to download build tools to compile native node modules. Run this command in **powershell**.
    >
    > ```sh
    > npm --add-python-to-path install --global windows-build-tools
    > ```

    Run **yarn** on the root the the project.

    ```sh
    $ ~/projects/javascript-af> yarn
    ```

3.  Boot up the development server

    Run the following command on the project root

    ```sh
    yarn dev
    ```

4.  Access the site and other tools

    After running `yarn dev` you can access the local development server on http://localhost:3000 . You can access graphiql at http://localhost:4000/graphql.

## License

GPL v3, see the [LICENSE](./LICENSE) file.
