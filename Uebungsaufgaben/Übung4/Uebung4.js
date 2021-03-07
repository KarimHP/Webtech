//Array initialisieren 
var meinArray = new Array();

//- Weisen Sie dem ersten Element des Arrays einen Wert zu.
meinArray[0] = 20; 

//Fügen Sie nun ein weiteres Element hinzu, das am Ende des Arrays angehängt wird.
meinArray.push(15);


//Erstellen Sie ein weiteres Array und verschmelzen Sie die beiden Arrays.
var meinZweitesArray = new Array();
meinZweitesArray.push(1);
meinZweitesArray.push(2);

var meinVerschmolzenesArray = meinArray.concat(meinZweitesArray);
console.log(meinVerschmolzenesArray);

//Was machen shift(), pop() und slice()?
    //shift entfernt das erste element aus dem array und gibt es zurück
    var shiftIt = meinVerschmolzenesArray.shift();
    console.log(shiftIt);
    //pop tut das gleiche mit dem letzten element 

    //slice
    var slicedarray = meinVerschmolzenesArray.slice(1);
    console.log("hä");


    //- Wie können Sie herausfinden, ob ein Element bereits in einem Array enthalten ist?
    console.log(meinVerschmolzenesArray.includes(33));