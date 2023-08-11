This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

## Step 1: Project installation

First you need to install all the dependencies for the project. Run at the _root_ of your React Native project:

```bash
# using npm
npm install

# OR using Yarn
yarn install
```

Then go to ios folder by *cd ios* and Run:

```bash
pod install
```

## Step 2: Adding files from gitignore

Create **.env** file in the _root_ of the project and add:

```bash
BASE_URL=https://opentdb.com
```

## Step 3: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 4: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 5: Using your App

On the **Initial screen** you will be provided with an option to choose Difficulty level
And also you are able to type your score

By pressing **True** button you need to wait before api  request is finished and after you you will be redirected to Questions screen.
There you will see a **X** button in the top right corner. By pressing ot will be redirected back to Initial screen and lose your progress.

On the **Questions screen** you will be provided with 10 questions with **True** and **False** options to answer.
Also, the progress bar will show you how many questions left.
After 10th question you will be redirected to Results screen.

There you will also see **X** button in the top right corner. By pressing it will be redirected back to Initial screen.
On **Results screen** you can see on witch questions you have provided correct answer and witch answers were wrong.
By pressing **Play again** button you will be redirected to the Initial screen, and you can start the game again.

## Notes:
- When you answer some questions and close the app you will get to the same question after opening the app again and the progress is saved
- On Questions screen the top right **Close icon** might just navigate the user back to the Initial screen. But as there is no certain way to more forward and continue answering the questions - the progress gets cleared. 
