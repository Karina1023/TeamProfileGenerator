function validateEmail(mail) {
    mail = mail.trim();
    var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(mail) || "Not a valid email, Please try again";
}
function validateNumber(id){
    id= id.trim();
    var pattern = /^\d+$/;
    return pattern.test(id) || "Not a valid number, Please try again";
}
function validateString(name){
    name= name.trim();
    var pattern = /^[a-zA-Z ]{3,30}$/;
    return pattern.test(name) || "Not a valid string, Please try again";
}
module.exports = {
    validateEmail,
    validateNumber,
    validateString
};