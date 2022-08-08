function validate() {
      
    if( document.myForm.name.value == "" ) {
       alert( "Please provide your name!" );
       document.myForm.name.focus() ;
       return false;
    }
    return( true );
}