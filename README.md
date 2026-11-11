# Rajhans Farmhouse Admin

An Android + iOS administration app built with **React Native 0.88 and TypeScript** — **no Expo**.

## Prototype
Current app includes dashboard stats, booking entry with overlap checks, a customer directory, financial reports, and dark/light/system themes. Bookings and theme selections are stored **only on the device** with AsyncStorage.

**Not production-ready:** Do not store real guest or payment data until authentication, cloud-backed conflict prevention, Firebase security rules, data migration and backups are implemented.

## Get an Android APK (no Expo account)
1. Open [GitHub Actions](https://github.com/AlexRayyan/Rajhans-Farmhouse/actions).
2. Choose **Android standalone test APK (No Expo)** and run it if needed.
3. When the build succeeds, download **rajhans-farmhouse-test-apk**.
4. Extract the artifact ZIP, transfer the APK to your phone, and install.

The test APK is built with embedded JavaScript/Hermes and signed with an **ephemeral testing key**. It is not suitable for publishing on Google Play or for update continuity. For release, configure a permanent signing key in GitHub Actions secrets.

## Local development
Requires Node 22.13+ or 24+, JDK 17, Android SDK and Gradle 9.4.1.

```sh
npm install
npm run typecheck
npm test
npm start
npm run android
```

Build via `cd android && gradle :app:assembleRelease` after generating a local Android debug keystore. GitHub Actions installs Gradle directly; the native Gradle wrapper JAR is not committed.

## iOS
Native Xcode project and CocoaPods configuration are included in `ios/`. Building/signing for iOS requires macOS/Xcode and Apple credentials. iOS binaries have not yet been built.

## Security
Never commit signing keys, passwords, tokens, guest information or Firebase private credentials. This public repo contains sample source only.
