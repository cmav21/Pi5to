
export function getResourceFormat(format) {  
  if (format === "COURSE")
    return "fas fa-video";
  if (format === "IMAGE")
    return "fas fa-file-image";
  else if( format === "PDF" )
    return "fas fa-file-pdf";
  else if( format === "WORD" )
    return "fas fa-file-word";
  else if( format === "POWERPOINT" )
    return "fas fa-file-powerpoint";
  else if( format === "MOVIE" )
    return "fas fa-file-film";
  else if( format === "CODE" )
    return "fas fa-file-code";
  else if( format === "MEME" )
    return "far fa-grin-squint-tears";
  else 
    return "fas fa-file"
}

export function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}