# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [5.0.0](https://github.com/pkra/mathjax-img/compare/v4.0.1...v5.0.0) (2025-07-08)


### ⚠ BREAKING CHANGES

* switches from mathjax-full to @mathjax/src package.

### Features

* upgrade and adjust to mathjax v4.0.0-rc.4 ([123b583](https://github.com/pkra/mathjax-img/commit/123b5837e28425c44b4053c19294c79c104e5c7c)), closes [#27](https://github.com/pkra/mathjax-img/issues/27)


### Bug Fixes

* **package:** switch to commit-and-tag-version ([ba78ee5](https://github.com/pkra/mathjax-img/commit/ba78ee579b24b7c4fc51b90313c78a12d8830491))

### [4.0.1](https://github.com/pkra/mathjax-img/compare/v4.0.0...v4.0.1) (2023-11-08)


### Bug Fixes

* adjust to mathjax v4-beta.4 ([2a2f722](https://github.com/pkra/mathjax-img/commit/2a2f722d57a35d011ebfd8e65c1027185fd2fdda)), closes [#25](https://github.com/pkra/mathjax-img/issues/25)

## [4.0.0](https://github.com/pkra/mathjax-img/compare/v4.0.0-1...v4.0.0) (2023-09-04)


### ⚠ BREAKING CHANGES

* Drops support for MathJax v3.

### Features

* add MathJaxv4-style browser build ([b589914](https://github.com/pkra/mathjax-img/commit/b589914b1ce74b011cfdad5f42e14bbfa7cac562))


### Bug Fixes

* **img.ts:** adjust imports ([9d300f8](https://github.com/pkra/mathjax-img/commit/9d300f806e85b43dd520cde161d64017a92a04ff))
* **img.ts:** fix function declaration ([54252c2](https://github.com/pkra/mathjax-img/commit/54252c2a2c9e0a8c37725afaf8d24b728f889a53))
* **img.ts:** fix TS type errors ([10d0b91](https://github.com/pkra/mathjax-img/commit/10d0b91711acf33c293c25c63b6f58d7c4e3341c))


* Merge pull request #24 from pkra/mathjax4 ([b04eabf](https://github.com/pkra/mathjax-img/commit/b04eabf85862d3fa85fe55894714da076dc9f753)), closes [#24](https://github.com/pkra/mathjax-img/issues/24)

## [4.0.0-1](https://github.com/pkra/mathjax-img/compare/v4.0.0-0...v4.0.0-1) (2023-08-14)


### Bug Fixes

* **package:** adjust path for "main" ([a6e5444](https://github.com/pkra/mathjax-img/commit/a6e5444d9b350b49f225de92e81521da7390fdc7))

## [4.0.0-0](https://github.com/pkra/mathjax-img/compare/v3.2.1...v4.0.0-0) (2023-08-10)


### ⚠ BREAKING CHANGES

* remove old CJS and webpacked version

### Features

* build ESM ([e71cd43](https://github.com/pkra/mathjax-img/commit/e71cd433c038a55094e89740546cf94544d1ce90))
* initial TS conversion attempt ([4cbf2e8](https://github.com/pkra/mathjax-img/commit/4cbf2e8d972cdcead94e8554b1dcc7e7a02e5139))
* remove old CJS and webpacked version ([65785d7](https://github.com/pkra/mathjax-img/commit/65785d706edce577097c6fde2213be0a9832409c))

### [3.2.1](https://github.com/pkra/mathjax-img/compare/v3.2.0...v3.2.1) (2022-06-29)


### Bug Fixes

* add minified build ([d6551c6](https://github.com/pkra/mathjax-img/commit/d6551c633cdc48f2193d537964d7755ec31d4ff0)), closes [#16](https://github.com/pkra/mathjax-img/issues/16)

## [3.2.0](https://github.com/pkra/mathjax-img/compare/v3.1.0...v3.2.0) (2022-06-28)


### Features

* support optional alt text ([05c880a](https://github.com/pkra/mathjax-img/commit/05c880a6883d930e7d15d04744c4e25899ad22b1)), closes [#2](https://github.com/pkra/mathjax-img/issues/2)

## [3.1.0](https://github.com/pkra/mathjax-img/compare/v3.0.0...v3.1.0) (2021-05-07)


### Features

* client-side build ([#12](https://github.com/pkra/mathjax-img/issues/12)) ([6ea7b0c](https://github.com/pkra/mathjax-img/commit/6ea7b0cab83c6f07cb374fb1e2441cc1b00a49be)), closes [#7](https://github.com/pkra/mathjax-img/issues/7)

## [3.0.0](https://github.com/pkra/mathjax-img/compare/v2.0.0...v3.0.0) (2020-10-06)


### ⚠ BREAKING CHANGES

* change export name

### Features

* change export name ([2321fac](https://github.com/pkra/mathjax-img/commit/2321fac21a1fde07bb4277a7bb55df612d7523f7)), closes [#8](https://github.com/pkra/mathjax-img/issues/8)


### Bug Fixes

* correct import ([437658a](https://github.com/pkra/mathjax-img/commit/437658a182743d29b51a1c831ae69ee3c21fe441)), closes [#9](https://github.com/pkra/mathjax-img/issues/9)

## 2.0.0 (2020-09-10)


### ⚠ BREAKING CHANGES

* No longer compatible with MathJax v2. NodeJS only.

### Features

* automate releases ([afa7311](https://github.com/pkra/mathjax-img/commit/afa73112cc9a3be2293d7bdaa8f2cabd6b2809e6))
* rewrite for MathJax v3 ([20b82fa](https://github.com/pkra/mathjax-img/commit/20b82fa7c463656b376f3fc984ddd3b59bcd0a3d)), closes [/github.com/mathjax/MathJax/issues/2517#issuecomment-686709079](https://github.com/pkra//github.com/mathjax/MathJax/issues/2517/issues/issuecomment-686709079) [#6](https://github.com/pkra/mathjax-img/issues/6)
