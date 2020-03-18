# Cloud Photo Viewer - Dropbox API Scraper

Utility for helping to deal with the Dropbox API

## Installation

```bash
yarn add @cloud-photo-viewer/dropbox-api-scraper
```

## Usage

### Quick Start - Easy Prototyping

If you want to quickly get an oauth token for prototyping without setting up an oauth flow
you can run the following command:

```bash
yarn create-dropbox-token-file --id <NAME_OF_YOUR_APP>_CLOUD_PHOTO_VIEWER_DROPBOX_PROTOTYPE_TOKEN
```

for example:

```bash
yarn create-dropbox-token-file --id PHOTO_VIEWER_CLOUD_PHOTO_VIEWER_DROPBOX_PROTOTYPE_TOKEN
```

## Testing

### Running Tests With Mock API

You can run the tests while mocking the Dropbox API.

```bash
yarn test
```

or to watch tests

```bash
yarn test:watch
```

### Running Tests With Real API

It's also recommended to run tests with the real API. You need to provide it a real Dropbox token.
This can either be done by [generating one with a helper utility and saving it to a file (locally)](#generating-token-to-file-recommended-local-testing) or [passing it in using an environmental variable (in CI)](#passing-token-as-environmental-variable-in-ci).

Once you have the token, you can run the tests with the real API by running:

```bash
yarn test:useRealApi
```

or to watch

```bash
yarn test:useRealApi:watch
```

#### Generating Token to File (Recommended, Local Testing)

First you need to run

```bash
yarn create-jest-dropbox-token-file
```

This will save a token to a file called `JEST_CLOUD_PHOTO_VIEWER_DROPBOX_PROTOTYPE_TOKEN`.
This should only be used for jest testing this package. If you're using it within your own
app please see [quick start - easy prototyping](#quick-start---easy-prototyping).

#### Passing Token as Environmental Variable (in CI)

You can specify your Dropbox token manually as an environmental variable

```bash
JEST_CLOUD_PHOTO_VIEWER_DROPBOX_PROTOTYPE_TOKEN=I_AM_THE_TOKEN test:useRealApi
```
