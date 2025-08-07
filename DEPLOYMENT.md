# Deploying Next.js to Firebase Hosting

## Prerequisites
- Install [Firebase CLI](https://firebase.google.com/docs/cli)
- Run `npm run build` (or `next build` and `next export`)
- The static site will be in the `out` folder

## Steps
1. **Login to Firebase**
   ```
   firebase login
   ```

2. **Initialize Firebase (if not done yet)**
   ```
   firebase init
   ```
   - Choose Hosting only
   - Set `public` directory to `out`
   - Configure as a single-page app: **Yes**

3. **Deploy**
   ```
   firebase deploy
   ```

## Notes
- For dynamic features (API routes), use Firebase Functions or another backend.
- This configuration serves static exports only.