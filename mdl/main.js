(function() {
// For Blockchain dialog
const blockchain_dialog = new mdc.dialog.MDCDialog(document.querySelector('#blockchain-dialog'));
blockchain_dialog.listen('MDCDialog:accecpt', function() {
    console.log("accecpted");
});

blockchain_dialog.listen('MDCDialog:cancel', function() {
    console.log("cancelled");
});

document.querySelector('#blockchain-button').addEventListener('click', function(evt) {
    blockchain_dialog.lastFocusedTarget = evt.target;
    blockchain_dialog.show();
});

// For Memebership drive dialog
const mbdrive_dialog = new mdc.dialog.MDCDialog(document.querySelector('#mbdrive-dialog'));
mbdrive_dialog.listen('MDCDialog:accecpt', function() {
    console.log("accecpted");
});

mbdrive_dialog.listen('MDCDialog:cancel', function() {
    console.log("cancelled");
});

document.querySelector('#mbdrive-button').addEventListener('click', function(evt) {
    mbdrive_dialog.lastFocusedTarget = evt.target;
    mbdrive_dialog.show();
});

// For Workshops dialog
const workshops_dialog = new mdc.dialog.MDCDialog(document.querySelector('#workshops-dialog'));
workshops_dialog.listen('MDCDialog:accecpt', function() {
    console.log("accecpted");
});

workshops_dialog.listen('MDCDialog:cancel', function() {
    console.log("cancelled");
});

document.querySelector('#workshop-button').addEventListener('click', function(evt) {
    workshops_dialog.lastFocusedTarget = evt.target;
    workshops_dialog.show();
});

//For Internship Fare dialog
const internship_dialog = new mdc.dialog.MDCDialog(document.querySelector('#internship-dialog'));
internship_dialog.listen('MDCDialog:accecpt', function() {
    console.log("accecpted");
});

internship_dialog.listen('MDCDialog:cancel', function() {
    console.log("cancelled");
});

document.querySelector('#internship-button').addEventListener('click', function(evt) {
    internship_dialog.lastFocusedTarget = evt.target;
    internship_dialog.show();
});

// For IV visit dialog
const iv_dialog = new mdc.dialog.MDCDialog(document.querySelector('#iv-dialog'));
iv_dialog.listen('MDCDialog:accecpt', function() {
    console.log("accecpted");
});

iv_dialog.listen('MDCDialog:cancel', function() {
    console.log("cancelled");
});

document.querySelector('#iv-button').addEventListener('click', function(evt) {
    iv_dialog.lastFocusedTarget = evt.target;
    iv_dialog.show();
});
})();
