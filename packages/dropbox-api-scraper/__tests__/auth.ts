describe("@cloud-photo-viewer/dropbox-api-scraper/auth", () => {
  beforeAll(() => {
    // check if JEST_TEST_APP_CLOUD_PHOTO_VIEWER_DROPBOX_PROTOTYPE_TOKEN exists
    // if (USE_REAL_API) {
    //   // check if the file exists
    //   if (!exists) {
    //     throw new Error(
    //       "You must run command `yarn create-jest-dropbox-token-file` if using with `USE_REAL_API` mode"
    //     );
    //   }
    // } else {
    //   // write "TEST_TOKEN" to JEST_TEST_APP_CLOUD_PHOTO_VIEWER_DROPBOX_PROTOTYPE_TOKEN
    // }
  });

  afterAll(() => {
    // we want to retain the dropbox token if we are using the real dropbox api to test
    // otherwise we want to clean up the token file after each run
    if (!USE_REAL_API) {
      // clean up the token file
    }
  });

  it.todo("should authenticate the user using a token file");
  // use `@node-api-toolkit/save-token/getToken`

  // const { token } = await auth({
  //     useTokenFromFile:
  //       "JEST_TEST_APP_CLOUD_PHOTO_VIEWER_DROPBOX_PROTOTYPE_TOKEN",
  //     appKey: "KEY",
  //     appSecret: "SECRET"
  // });

  // if (USE_REAL_API) {
  //   expect(token).toBeTruthy();
  // } else {
  //   expect(token).toBe("TEST_TOKEN");
  // }
});
