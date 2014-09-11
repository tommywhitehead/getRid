//
//  getRid
//
//  Author: Thomas Whitehead
//  Description: A simple plugin for removing a dynamic content element with no content (even if it has whitespace created by your cms).
//
(function ( $ ) { 
    $.fn.getRid = function() {
        return this.each(function() {
            var self = $(this);
            if ( self.find('*').length == 0 ) {
                self.remove();
            }
        });
    }; 
    $.ltrim = function( str ) {
        return str.replace( /^\s+/, "" );
    }; 
    $.rtrim = function( str ) {
        return str.replace( /\s+$/, "" );
    }; 
}( jQuery ));