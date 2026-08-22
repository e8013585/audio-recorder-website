# Google Play store listing — Audio Recorder

Copy-paste ready. Character counts are against Play's limits and were checked at the
time of writing; re-check after any edit.

Everything below describes behaviour that exists in the code today. Nothing is
aspirational — Play rejects listings that promise features the app does not have.

---

## App name

*Limit: 30 characters.*

```
Audio Recorder
```

`14 / 30`

"Audio Recorder" is heavily contested on Play, so consider a distinguishing suffix.
Options that stay inside the limit:

| Candidate | Chars |
|---|---|
| `Audio Recorder` | 14 |
| `Audio Recorder — Voice Memos` | 28 |
| `Audio Recorder: Studio Notes` | 28 |
| `ASR — Audio Recorder` | 20 |

---

## Short description

*Limit: 80 characters. Shown under the title in search results.*

```
Record in 10 formats with a precise waveform. No ads, no tracking, no accounts.
```

`78 / 80`

Alternatives:

```
High-quality voice recorder with real controls. Nothing leaves your device.
```
`74 / 80`

```
Ten audio formats, a readable waveform, on-device editing. No ads or tracking.
```
`77 / 80`

---

## Full description

*Limit: 4000 characters. The version below is 2,847.*

```
A voice recorder for people who care about the recording itself.

Audio Recorder gives you the controls a real recorder has — format, sample rate, bit
rate, gain, microphone selection — and then shows you exactly what it captured. Every
setting changes the file that lands on your device. Nothing is decorative.

RECORD IN THE FORMAT YOU ACTUALLY NEED
• WAV in 16-bit or 32-bit float, and FLAC, for lossless work
• MP3, M4A, AAC, OGG, Opus, AMR and 3GP when size matters
• Sample rates from 8 kHz to 96 kHz, bit rates up to 320 kbps
• Mono or stereo
• Only the values a format genuinely supports are offered, so you cannot pick a
  combination that quietly fails

A WAVEFORM YOU CAN READ
• Drawn one fine line per pixel, with a time scale above and below
• Peaks line up with the moments that made them
• Live level in decibels and a running file size while you record
• Choose the waveform colour and turn the grid on or off

CONTROLS THAT CHANGE THE AUDIO
• Gain from −30 dB to +30 dB
• Noise suppression and automatic gain control
• Pick the microphone source and direction, or record from a Bluetooth headset
• Monitor through headphones while recording
• Skip silence automatically, with an adjustable threshold
• Voice activation: capture only while someone is speaking

EDIT WITHOUT LEAVING THE APP
• Trim to the part you want. Trimming copies the audio stream instead of re-encoding
  it, so a 320 kbps recording stays 320 kbps
• Fade in and fade out
• Convert between any of the supported formats

BUILT TO SURVIVE REAL LIFE
• Pause or stop automatically when a call comes in
• Recordings are written to protected storage first and recovered after a crash
• A low battery or a filling disk stops the recording cleanly and keeps what you had
• Record from a home screen widget

FIND THINGS AGAIN
• Search your recordings by name
• Build filenames from the parts you want — date, time, milliseconds, your own prefix
  — in the order you want, in your own time zone
• Rename on save, or later
• Save audio profiles and reload a whole configuration in one tap
• Files land in Recordings/Audio Recorder, organised by year, where your other apps
  can see them

PLAY IT BACK PROPERLY
• Variable speed playback
• Ten-second skips and tap-to-seek on the waveform
• Keeps playing in the background with notification controls

KEEP IT PRIVATE
• Optional PIN or fingerprint lock, re-armed every time the app leaves the screen
• PINs are salted and hashed, never stored as readable text
• Copy recordings to a computer over Wi-Fi with the built-in server — password
  protected, local network only, and off unless you start it

MADE TO FIT YOU
• Light, dark or system theme, with Material You dynamic colour
• Two design styles
• 125 languages, and 18 numbering systems including Eastern Arabic, Devanagari, Thai,
  Bengali, Tamil and Khmer

NO ADS. NO TRACKING. NO ACCOUNT.
There is no sign-in, no advertising and no analytics of any kind — the app contains no
tracking libraries at all. Your recordings are never uploaded. The only network feature
is the Wi-Fi server you switch on yourself, and it serves files to your own local
network and nowhere else.

Requires Android 9.0 or later.

Translations beyond English are still in progress.
```

---

## Notes before you publish

**Privacy policy is mandatory.** The app requests microphone access, so Play requires a
reachable privacy policy URL. `privacy.html` in this folder is ready to publish. The app
currently links to `https://e8013585.github.io/audio-recorder-privacy-policy/`, which is
a different address from this site — either publish the policy there too, or change the
link in `SettingsViewModel.openPrivacyPolicy()` to point at wherever you host it.

**Data safety form.** Declare "No data collected" and "No data shared". Be ready to
explain, if asked, that microphone audio stays on the device, that approximate location
is optional and stored locally, and that phone state is used only to detect an active
call.

**Permission declarations.** `READ_PHONE_STATE` and location are both optional features
and Play may ask you to justify them. The honest answers: pausing or stopping a
recording when a call arrives, and tagging a recording with an approximate place name.

**App Bundle, not APK.** The native audio libraries are stored uncompressed for 16 KB
page-size support, so a universal APK is very large. An App Bundle splits per
architecture and cuts the download to roughly a quarter.

**Screenshots.** Play requires at least two phone screenshots. The recorder screen
mid-recording, the recordings list, the player with a waveform, and the settings screen
make an obvious set.

**Content rating and category.** Category: Music & Audio, or Tools. The questionnaire
should come out at "Everyone" — there is no user-generated content sharing, no ads and
no data collection.
