function handler(){
  //get Ticket name:
  var ticketname = $('.customization2_attendee_title')
  var name = ticketname.text().replace(/^\s+|\s+$/g, "")
  if (name == "Ich bin Veranstaltungspartner / Speaker" )
      {
           $('.customization2_attendee_further-data_custom-question-4').css("display","none") //Funkton

           var ddPosition = $('.customization2_attendee_further-data_custom-question-3 .customization2_attendee_further-data_custom-question_dropdown')

           ddPosition.change(function(){
                var state = ddPosition.val().replace(/^\s+|\s+$/g, "")
                if ( state == "andere") {
                    $('.customization2_attendee_further-data_custom-question-4').css("display","block");
                }
                else {    
                    $('.customization2_attendee_further-data_custom-question-4').css("display","none");
                }

           }
                            )
      }
  
  else{

  
     //Hide Position im Unternehmen and Funktion im Unternehmen
     
     $('.customization2_attendee_further-data_custom-question-5').css("display","none") //position
     $('.customization2_attendee_further-data_custom-question-7').css("display","none") //Funkton

    
     var ddPosition = $('.customization2_attendee_further-data_custom-question-4 .customization2_attendee_further-data_custom-question_dropdown')
    
     ddPosition.change(function(){
       	var state = ddPosition.val().replace(/^\s+|\s+$/g, "")
        if ( state == "andere") {
            $('.customization2_attendee_further-data_custom-question-5').css("display","block");
        }
        else {    
            $('.customization2_attendee_further-data_custom-question-5').css("display","none");
        }
     }
                      )
         
                       
     var ddFunktion = $('.customization2_attendee_further-data_custom-question-6 .customization2_attendee_further-data_custom-question_dropdown')

                       
     ddFunktion.change(function(){
       	var state = ddFunktion.val().replace(/^\s+|\s+$/g, "")
        if ( state == "andere") {
            $('.customization2_attendee_further-data_custom-question-7').css("display","block")
        }
        else {  
            $('.customization2_attendee_further-data_custom-question-7').css("display","none")
        }
     }
                      )
    }
      
 }

function getState(shortName, wrapperClass){
  var state;
 $('.'+wrapperClass+' .customization2_attendee_further-data .vv-nl-mb-lg').each(function(i, element) {
   var item = $(this).find('.customization2_attendee_further-data_custom-question_label').text().replace(/^\s+|\s+$/g, "");

   if(item !== '' && item.replace(/^\s+|\s+$/g, "").indexOf(shortName) > -1){
     state = $(this).closest('.vv-nl-mb-lg').find('.customization2_attendee_further-data_custom-question_dropdown').val();
     //console.log("in_getState");
     //console.log(state);
     return state;

   }
   return false;
 });
}

function getValue(shortName, wrapperClass){
  var value;
 $('.'+wrapperClass+' .customization2_attendee_further-data .vv-nl-mb-lg').each(function(i, element) {
   var item = $(this).find('.customization2_attendee_further-data_custom-question_label').text().replace(/^\s+|\s+$/g, "");

   if(item !== '' && item.replace(/^\s+|\s+$/g, "").indexOf(shortName) > -1){
     value = $(this).closest('.vv-nl-mb-lg').find('.customization2_attendee_further-data_custom-question_input').val();
          //console.log("in_getValue");
          //console.log(value);
     return value;
   }
   return false;
 });
    
}

function init2(name){
  $('.'+name+' .customization2_attendee_further-data_custom-question').on('change', function(){
    //enabledDisabledButton(name);
    console.log("State:");
    console.log(getState('Funktion im Unternehmen', name));
    getState('Funktion im Unternehmen', name);
    console.log("Value:");
    console.log(getValue('Welche Funktion haben Sie?', name));
    getValue('Welche Funktion haben Sie?', name);
    
    
  });
}
init2('customization2_attendee-1');
  

  handler();
  document.addEventListener("animationstart", insertionListener, false); // standard + firefox
  document.addEventListener("MSAnimationStart", insertionListener, false); // IE
  document.addEventListener("webkitAnimationStart", insertionListener, false); // 

  
