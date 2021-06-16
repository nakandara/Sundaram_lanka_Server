 const dateModified = ((t) =>  {
    //current date
    var d = new Date();
    //reduced by t- t is no of dates to be reduced
    d.setDate(d.getDate() - t);

    var dd = String(d.getDate()).padStart(2, '0');
    var mm = String(d.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = d.getFullYear();
    dateReq = yyyy+'-'+mm+'-'+dd
    
    //retrun value
    return dateReq

})


module.exports  = {dateModified}
