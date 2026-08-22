# Audio Recorder — website

Static marketing site and privacy policy. No build step, no dependencies: these files
are served exactly as they are.

```
index.html               landing page
privacy.html             privacy policy
site.css                 styles (light + dark)
site.js                  configuration + wiring
icon.svg                 app icon, used as the favicon and the header mark
.nojekyll                tells GitHub Pages to serve the files as-is
play-store-listing.md    store copy, not part of the site
```

## Changing the developer name, email or store link

Open `site.js` and edit the `SITE` object at the top. One change updates both pages.

```js
const SITE = {
  developer: "Hasan Bayramoglu",  // footers, About, copyright
  appName: "Audio Recorder",
  version: "1.0.0",
  supportEmail: "hasan.bayramoglu.developer@gmail.com",
  playStoreUrl: "",                   // empty -> buttons show "Coming soon"
  ...
};
```

The same strings also appear literally in the HTML so the pages still read correctly if
scripts are blocked. `site.js` overrides them at load, so editing it alone is enough for
normal use — if you want the fallback text to match too, search the `.html` files for the
old value.

Once the app is live, paste its Play URL into `playStoreUrl`; the download buttons become
real links automatically.

## Publishing to GitHub Pages

The intended address is `https://e8013585.github.io/audio-recorder-website/`, which means
a repository named `audio-recorder-website`.

1. Create that repository on GitHub.
2. Copy the contents of this folder into its root — `index.html` must sit at the top
   level, not inside a subfolder. Include the hidden `.nojekyll` file; without it Pages
   runs the folder through Jekyll, which is needless here and can drop files whose names
   begin with an underscore.
3. In the repository, open **Settings → Pages**, set **Source** to *Deploy from a branch*,
   pick your default branch and the `/ (root)` folder, and save.
4. Wait a minute, then load the address above.

## About the privacy policy

Google Play requires a reachable privacy policy URL for any app that uses the
microphone, so `privacy.html` needs to be live before you submit.

`openPrivacyPolicy()` in `SettingsViewModel.kt` links to
`https://e8013585.github.io/audio-recorder-website/privacy.html`, so publishing this
folder at the address above is what makes that link resolve. (An earlier version pointed
at a separate `audio-recorder-privacy-policy` repository; that is no longer the case.)

The policy was checked against the app as built on 2026-08-15 and describes it
accurately: no accounts, no analytics or crash reporting, no audio uploaded. It also
spells out the three things that do involve a third party, each of which is real and
must stay documented —

- **AdMob.** The app ships `play-services-ads` and shows one banner, with the UMP consent
  SDK gating it in the EEA/UK/Switzerland. The `AD_ID` permission is declared explicitly
  in the manifest.
- **Location tagging.** `LocationHelper` uses Google Play services for the fix and
  `android.location.Geocoder` for the place name, so coordinates do go off-device even
  though only the city string is stored. The setting **defaults to on** and the app
  prompts for the permission on first record.
- **Android backup.** `allowBackup="true"` plus `data_extraction_rules.xml` mean the
  settings and the recordings database (names, dates, waveforms, place names) can be
  copied to the user's Google account. Audio files are not included; `secure_prefs.xml`
  (PIN and web-server credentials) is explicitly excluded.

If you change any of that — dropping ads, adding a network feature, altering the backup
rules — update the policy and bump `policyUpdated` in `site.js`.

## Things worth adding later

- Real screenshots. The hero currently shows a drawn waveform rather than the app.
- An `og:image` for link previews.
- A short changelog page once there is more than one release.
