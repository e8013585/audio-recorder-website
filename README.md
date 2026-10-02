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
  // empty -> buttons show "Coming soon"
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.eurotec.audiorecorder",
  ...
};
```

The same strings also appear literally in the HTML so the pages still read correctly if
scripts are blocked. `site.js` overrides them at load, so editing it alone is enough for
normal use — if you want the fallback text to match too, search the `.html` files for the
old value.

The app is live on Google Play, and `playStoreUrl` holds its listing. The badge in
`index.html` also carries the URL as a literal `href`, so it works without scripts; if
the listing URL ever changes, update both.

## Publishing to GitHub Pages

The site is served at `https://e8013585.github.io/audio-recorder-website/` from the
`main` branch of `https://github.com/e8013585/audio-recorder-website`, root folder
(**Settings → Pages → Deploy from a branch**).

This `website/` folder, inside the Android project, is a git clone of that repository —
it is the only part of the project under version control. To publish a change, commit
here and push:

```
git add -A
git commit -m "Describe the change"
git push
```

Pages redeploys within a minute or two. Keep `index.html` at the top level and keep the
hidden `.nojekyll` file; without it Pages runs the folder through Jekyll, which is
needless here and can drop files whose names begin with an underscore.

If you edit a file on github.com instead, run `git pull` here before your next local
change so the two copies don't diverge.

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
