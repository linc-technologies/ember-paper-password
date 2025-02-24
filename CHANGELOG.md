# Changelog

## [0.4.2](https://github.com/linc-technologies/ember-paper-password/compare/ember-paper-password-v0.4.1...ember-paper-password-v0.4.2) (2025-02-24)


### Bug Fixes

* **deps:** cves everywhere all at once pt 4 ([#73](https://github.com/linc-technologies/ember-paper-password/issues/73)) HERO-10791 ([01f0a53](https://github.com/linc-technologies/ember-paper-password/commit/01f0a530ab62f09c08357e757447d8d97adf9070))
* **deps:** resolves on `tar@^6.2.0` to mitigate CVE-2021-37701, CVE-2021-37712, CVE-2021-37713, CVE-2021-32803, CVE-2021-32804, CVE-2024-28863. ([#71](https://github.com/linc-technologies/ember-paper-password/issues/71)) ([1b37d31](https://github.com/linc-technologies/ember-paper-password/commit/1b37d311b45dfdd1a759aeb61aae75190db94d58))
* **deps:** resolves on `tar@6.2.0` to mitigate CVE-2021-37701, CVE-2021-37712, CVE-2021-37713, CVE-2021-32803, CVE-2021-32804, CVE-2024-28863. ([1ccb1bb](https://github.com/linc-technologies/ember-paper-password/commit/1ccb1bb15a71ab0f8156a41bcabe69d31a8ec152))
* upgrade semver to ^5.7.2 to fix CVE. ([fdd8e13](https://github.com/linc-technologies/ember-paper-password/commit/fdd8e13e2c90d32dd52d95ab9ba9f399ce094ee1))
* upgrade trim-newlines to 3.0.1 to fix CVE. ([1b9b8dc](https://github.com/linc-technologies/ember-paper-password/commit/1b9b8dceca35a6f66ec17a30404e6b1d1ce8ad1e))

## [0.4.1](https://github.com/linc-technologies/ember-paper-password/compare/ember-paper-password-v0.4.0...ember-paper-password-v0.4.1) (2025-02-20)


### Bug Fixes

* **deps:** mitigates against CVE-2023-45133 and GHSA-vjh7-7g9h-fjfh. ([#67](https://github.com/linc-technologies/ember-paper-password/issues/67)) ([0c2111f](https://github.com/linc-technologies/ember-paper-password/commit/0c2111f37da13cd00ba3548cf4dd685e46068d2f))

## [0.4.0](https://github.com/linc-technologies/ember-paper-password/compare/ember-paper-password-v0.3.0...ember-paper-password-v0.4.0) (2024-10-09)


### Features

* **deps:** upgrades to `ember@3.20`. ([#36](https://github.com/linc-technologies/ember-paper-password/issues/36)) ([838ed19](https://github.com/linc-technologies/ember-paper-password/commit/838ed1942b62fed975609a4c53043c95c17991ba))
* upgrades to `ember@3.20`. ([38b51d4](https://github.com/linc-technologies/ember-paper-password/commit/38b51d459393b63cb4e00bd43cc23bfacc3127b3))


### Bug Fixes

* **addon/components/paper-password:** fixes use of undeclared dependencies in computed properties. ([41d25fa](https://github.com/linc-technologies/ember-paper-password/commit/41d25fa88248646db986fd2547e4254e09bbc907))

## [0.3.0](https://github.com/linc-technologies/ember-paper-password/compare/ember-paper-password-v0.2.0...ember-paper-password-v0.3.0) (2024-10-09)


### Features

* **.github:** adds codeowners. ([c53ea48](https://github.com/linc-technologies/ember-paper-password/commit/c53ea48f658924dae3437cbcdf11a4a7788ea5e3))
* **.github:** adds codeowners. ([#37](https://github.com/linc-technologies/ember-paper-password/issues/37)) ([d79d64d](https://github.com/linc-technologies/ember-paper-password/commit/d79d64d2c0ebabd932dcd212e4998636868f99b6))
* **addon/components/paper-password:** migrates to native `zxcvbn` via `ember-auto-import`. ([83ebfdb](https://github.com/linc-technologies/ember-paper-password/commit/83ebfdbee4690f1d7f186a875fdf8322ac1ac2e6))
* **deps:** migrates to yarn for dependency management. ([07c7ba2](https://github.com/linc-technologies/ember-paper-password/commit/07c7ba2737854e858e4417de96953f16514889e6))
* **deps:** migrates to yarn for dependency management. ([#27](https://github.com/linc-technologies/ember-paper-password/issues/27)) ([9f6c143](https://github.com/linc-technologies/ember-paper-password/commit/9f6c1431f205fbf930916e381b732701965ddfc2))
* initial `ember@3.12.0` upgrade. ([55d366d](https://github.com/linc-technologies/ember-paper-password/commit/55d366d6d96bd5c836a5794908737374f14da2b0))
* initial `ember@3.16.2` upgrade. ([e6ba2fa](https://github.com/linc-technologies/ember-paper-password/commit/e6ba2fa97d7894c2ffdcc58f977f7adf1bebb7a5))
* initial `ember@3.8.3` upgrade. ([c8be5bd](https://github.com/linc-technologies/ember-paper-password/commit/c8be5bdb56e808a040666578f641a69f1042ae55))


### Bug Fixes

* **addon/components/paper-password:** fixes ember/avoid-leaking-state-in-ember-objects lint. ([b1f7e1d](https://github.com/linc-technologies/ember-paper-password/commit/b1f7e1d6633403cb4c44e9e44f78169b6c42d96e))
* **addon/templates/components/paper-password:** fixes lint (no-implicit-this). ([b5dedad](https://github.com/linc-technologies/ember-paper-password/commit/b5dedad37f7f7f19086bcfa0a337583fcdc52e9b))
* **deps:** adds missing dependency `ember-source-channel-url@^3.0.0`. ([f86c3b6](https://github.com/linc-technologies/ember-paper-password/commit/f86c3b63f5f3c1a150c7fbabb62da84e88a9bf11))
* **tests/dummy/app/app:** remove usage of `Ember` global. ([dfe24c1](https://github.com/linc-technologies/ember-paper-password/commit/dfe24c10a22f4c601d4aee127e14620e38581e3c))
* **tests/dummy/app/templates/application:** fixes lint (no-implicit-this). ([77918c8](https://github.com/linc-technologies/ember-paper-password/commit/77918c89b234ee90def63061ed98997f5cac8236))


### Miscellaneous Chores

* release 0.3.0 ([51c4a9a](https://github.com/linc-technologies/ember-paper-password/commit/51c4a9a97780ed71c5c311a05f3288aadc133c22))
