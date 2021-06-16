
exports.ttCorrector = (ttid) => {
    console.log('income ', ttid);
    ttid == 13 ? ttid = 7 : ttid = ttid
    ttid == 14 ? ttid = 8 : ttid = ttid
    console.log('corre ', ttid);

    return ttid
}