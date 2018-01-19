(function() {
const dialog = new mdc.dialog.MDCDialog(document.querySelector('#my-mdc-dialog'));
dialog.listen('MDCDialog:accecpt', function() {
    console.log("accecpted");
});

dialog.listen('MDCDialog:cancel', function() {
    console.log("cancelled");
});

document.querySelector('#blockchain-button').addEventListener('click', function(evt) {
    dialog.lastFocusedTarget = evt.target;
    dialog.show();
});
})();
