
const firebaseConfig = {
    apiKey: "AIzaSyCz6r45iE9EV2Rnut_pdfsrNkZLJcpmIBw",
    authDomain: "cumplellobito.firebaseapp.com",
    databaseURL: "https://cumplellobito-default-rtdb.firebaseio.com",
    projectId: "cumplellobito",
    storageBucket: "cumplellobito.appspot.com",
    messagingSenderId: "148306184042",
    appId: "1:148306184042:web:1564cad716a7c6053a8713"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

// reference your database
const contactFormDB = firebase.database().ref("invitadosConfirmados")

document.getElementById("submit-form").addEventListener("submit", submitForm)

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("friendName")

    saveName(name)
    window.location.href = "thanks.html"
    console.log(name)
}

const saveName = (name) => {
    var newContactForm = contactFormDB.push()

    newContactForm.set({
        name: name
    })
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}

document.getElementById("btnEnviar").addEventListener("click")