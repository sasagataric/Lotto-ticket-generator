function showLotoTicket() {
    var numbers=$('input[name="ticketNumber"]').map(function() {
        return this.value || null;
    }).get();

    $("td").removeClass("crossed");
    if(!validate(numbers)){
        return;
    }
    
    $("#createTabel").empty().append(createTable()); 
    for(key=0; key < numbers.length; key++)  {
        document.getElementById(numbers[key]).className+="crossed"
    }
    $("table").css("visibility","visible");
};
function validate (input){

    if(input.length!==7){
        alert("Insert all numbers");
            $("table").css("visibility","hidden");
            return false;
    }

    if(input.some(br=>br<1) || input.some(br=>br>39)){
            alert("Insert numbers between 1 and 39 ");
            $("table").css("visibility","hidden");
            return false;
    }
    if(new Set(input).size !== input.length ){
        alert("Number cant be duplicated");
            $("table").css("visibility","hidden");
            return false;
    }
    
    return true;
};
function createTable(){
    var id=1;
    for(i=1; i<14; i++){
        var tr = $('<tr>').addClass('');
        for(y=1; y<4; y++){
            var td = $('<td>').attr('id', id).text(id);
            tr.append(td);
            id++;
        }
        $('#createTabel').append(tr);
    }
}