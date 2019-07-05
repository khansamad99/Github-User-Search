const searchuser = document.getElementById('searchuser');

const git = new Github;
const ui = new UI;

searchuser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if(userText !== ''){
        git.getuser(userText)
        .then(data => {
            if (data.profile.message === 'Not Found') {
                ui.showAlert('Profile Not found','alert alert-danger');
            } else {
                ui.showprofile(data.profile);
                ui.showrepos(data.repos);
            }
        });
    } else {
        ui.clearprofile();
    }
})