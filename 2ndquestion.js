var qteams = {aaiec: 400, 
    aaiwc: 60, 
    qai: 200, 
    poc: 100,
    gtm: 50,
    hr: 10
    };   
     var sortable = [];
    for (var member in qteams) {
        sortable.push([member, qteams[member]]);
    }
    
    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });