var SlidesAppService_ = this;
SlidesAppService_.tokenService = function(){return ScriptApp.getOAuthToken()}
SlidesAppService_.checkTokenService = function(){if(isFunction(this.getTokenService)){return true}else{throw new Error("Token Service is not a valid function")}}


/**
* Stores the function passed that is invoked to get a OAuth2 token if the default Apps Script service is not wanted;
*
* @param {function} func The function used to get the OAuth2 token;
* @return {object} refernce to the SlidesApp service for chaining 
* 
*/
function setTokenService(func){SlidesAppService_.tokenService = func; return SlidesAppService_; }

/**
* Open the presentation from the fileId provided
*
* @param {string} fileId the fileId of the Presentation you want to open
* @return {object} a Presentation Object
*/
function openById(fileId){
  Slides.setTokenService(SlidesAppService_.tokenService); 
  var presentationObject = Slides.presentationsGet(fileId);
  return new Presentation_(presentationObject)
}


/**
* Creates a presentation from the file name provided
*
* @param {string} fileName the file name of the Presentation you want to create
* @return {object} a Presentation Object
*/
function create(fileName){
   Slides.setTokenService(SlidesAppService_.tokenService); 
   var presentationObject = Slides.presentationsCreate({title:fileName}); 
   return new Presentation_(presentationObject)
}