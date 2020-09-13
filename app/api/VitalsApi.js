import firebase from "./firebase";

//posting data function to firebase
//function receives vitals {date,bpm,blood,temp}
//sets a doc with a doc id of date to have the rest of the vitals data (bpm, blood, temp)
//if docid(date) already exisit, it gets updated with new vaules, else it creates a doc with and id of vitals.date
export function saveVitals(vital) {
  firebase
    .firestore()
    .collection("vitals")
    .doc(vital.date)
    .set({
      blood: vital.blood,
      temp: vital.temp,
      bpm: vital.bpm,
    })
    .then(function () {
      alert("Vitals Saved");
    })
    .catch(function (error) {
      alert("Error saving to database");
      console.error("Error writing document: ", error);
    });
}

/** Disclaimer: I wanted to add a read function here as well to make code more streamline
 * but ran into some promise await issues so I moved the read function to cards.js */
