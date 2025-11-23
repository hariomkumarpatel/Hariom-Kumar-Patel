function saveBio(){
    firebase.database().ref("profile/bio").set(
        document.getElementById("bioInput").value
    ).then(()=>alert("Bio Updated!"));
}

function uploadImg(){
    let file = document.getElementById("imgUpload").files[0];
    let ref = firebase.storage().ref("gallery/" + file.name);

    ref.put(file).then(() => {
        ref.getDownloadURL().then(url => {
            firebase.database().ref("gallery").push(url);
            alert("Image Uploaded!");
        });
    });
}
