# ☕ QuickBrew

**Pre-order coffee for instant pickup.** A cross-platform React Native app that streamlines café orders—customers skip the wait, cafés handle high-volume orders more efficiently.

## Get Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the app**

   ```bash
   npx expo start
   ```

   Choose how to run: [development build](https://docs.expo.dev/develop/development-builds/introduction/), [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/), [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/), or [Expo Go](https://expo.dev/go).

3. **Run on a specific platform**

   ```bash
   npm run ios      # iOS
   npm run android  # Android
   ```

## Commit and push checks

After you run `npm install`, Git checks run for you automatically ([Husky](https://typicode.github.io/husky/)).

- **When you commit:** staged JS/TS files are run through ESLint **auto-fix** first ([lint-staged](https://github.com/lint-staged/lint-staged)). Your message must look like `feat: add login` — type (`feat`, `fix`, …), then a short description in **lowercase**. To fix the whole repo: `npm run lint:fix`.
- **When you push:** the project runs lint and TypeScript checks first. If something fails, fix it or run `npm run validate` locally to see the same errors.
- **To skip a check (only when needed):** add `--no-verify` to `git commit` or `git push`.

## Features

- **📱 Cross-platform** — iOS & Android
- **⚡ Customizable orders** — Size, add-ons, and more
- **🔐 Authentication** — Firebase Auth
- **🛒 Cart** — Real-time updates
- **🔄 Data layer** — TanStack Query for fetching & caching
- **🔔 Notifications** — Order status via Firebase Cloud Messaging
- **📍 Stores** — Location selection and order tracking
- **🌙 Dark mode** — System-aware theme support
- **💾 Persistent state** — Backend sync, no data loss on refresh

## Tech Stack

| Layer | Technologies |
|-------|--------------|
| **Frontend** | React Native, NativeWind (Tailwind CSS) |
| **Server state** | TanStack Query |
| **Backend** | Firebase (Auth, Firestore, FCM) |
| **Navigation** | React Navigation |
| **Styling** | NativeWind with custom theme |

## Architecture Highlights

- Server-state management with caching and background refetch
- Optimistic UI updates
- Scalable component structure
- Real-time sync with Firebase
- Multi-step ordering flows

## Why QuickBrew?

Order ahead, pick up without waiting. QuickBrew removes café wait times for customers and gives businesses a better way to manage busy periods.

---

## Learn More

- [Expo](https://docs.expo.dev/) · [React Navigation](https://reactnavigation.org/) · [NativeWind](https://www.nativewind.dev/) · [Firebase for RN](https://rnfirebase.io/)
