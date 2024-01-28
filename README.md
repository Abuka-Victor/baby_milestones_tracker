# Baby Milestones Tracker App

Welcome to the Baby Milestones Tracker app – a React Native Expo application designed to help parents track and cherish their baby's developmental milestones. This app provides an intuitive and user-friendly interface for recording and remembering those precious moments.

## Key Features

- **Milestone Logging:** Easily log and monitor your baby's key developmental milestones.
- **Intuitive UI/UX:** A clean and intuitive user interface for a seamless experience.

The user can do crud operations as regards logging the milestones. The user can add, view, edit and delete milestones. I also created a button for development convenience and maybe user convenience as well to be able to delete all the milestones at once using the remove all button in the user profile section.

## How to Run the App

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Abuka-Victor/baby_milestones_tracker.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd baby_milestones_tracker
   ```

3. **Install Dependencies:**

   ```bash
   yarn
   ```

4. **Start the Expo Development Server:**

   ```bash
   yarn start
   ```

   This will start the Expo dev server in your terminal. You can run the app on an emulator, on a physical device using the Expo app, or by scanning the QR code with the Expo Go app.

5. **Run on Emulator or Device:**
   - To run on an Android emulator or device, press `a`.
   - To run on an iOS simulator or device, press `i`.

## Design Decisions and Other Considerations

- **User-Centric Design:** The app is designed with a focus on a user-friendly experience, allowing users to easily navigate and interact with the application.

- **Data Persistence:** I used the AsyncStorage package to facilitate persistence but I created a separate file called services.js where I wrote the code for this persistence. I did this in order to separate concerns and also to prevent circular rendering

- **Beautiful Onboarding:** I used lottiefiles package to create an animated and engaging onboarding experience for the user

Happy milestone tracking! 🎉👶

Author Abuka Victor
