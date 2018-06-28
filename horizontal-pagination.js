/* 
    Script          horizontal-pagination.js 
    Author          @pearlpandz
    Licencse        MIT/license 
    Dependencies    jquery.min.js
    version         2.0
    powered by      @Bailwan-Karthi
*/
;
(function($, window, document, undefined) {
    $.fn.horizontalPagination = function(option) {
        // Variable Declaration
        var start = 0;
        var elementID; //user given ID
        var tdLenght;
        var tableSectionWidth;
        var temp, temp1, tempwidth;
        // Getting user given ID 
        elementID = '#' + this.attr('id');

        // Initially Previous buttons hide
        $(elementID + ' ' + '.prev').hide();
        $(elementID + ' ' + '.prev1').hide();

        // overall columns length

        tdLenght = $(elementID + ' ' + '.inner-content table th').length;
        tableWidth = $(".inner-content table").outerWidth();
        tableSectionWidth = $(".inner-content").outerWidth();

        temp = start;

        // Calling Go Next Function
        $(elementID + ' ' + '.next').click(function() {
            searchNext();
        });

        // Calling Go Last Section Function
        $(elementID + ' ' + '.next1').click(function() {
            searchNextAll();
        });

        // Calling Go First Section Function
        $(elementID + ' ' + '.prev').click(function() {
            searchPrevAll();
        });

        // Calling Go Prev Section Function
        $(elementID + ' ' + '.prev1').click(function() {
            searchPrev();
        });


        // Go Next Function
        function searchNext() {
            console.log("tableWidth:" + tableWidth);

            if (temp != tableWidth) {
                temp1 = tableWidth - temp;
                temp = temp + tableSectionWidth;
                $(elementID + ' ' + '.next').show();
                $(elementID + ' ' + '.next1').show();
                $(elementID + ' ' + '.prev').show();
                $(elementID + ' ' + '.prev1').show();

                $(".inner-content table th, .inner-content table td").css('transform', 'translateX(-' + temp + 'px)');

                if ((temp1 - tableSectionWidth) < tableSectionWidth) {

                    $(elementID + ' ' + '.next').hide();
                    $(elementID + ' ' + '.next1').hide();
                    $(elementID + ' ' + '.prev').show();
                    $(elementID + ' ' + '.prev1').show();
                }
            }

            if (temp >= tableWidth) {
                $(elementID + ' ' + '.next').hide();
                $(elementID + ' ' + '.next1').hide();
                $(elementID + ' ' + '.prev').show();
                $(elementID + ' ' + '.prev1').show();
            }
        }

        // Go Next Function
        function searchPrev() {
            if (temp == start) {
                $(elementID + ' ' + '.next').show();
                $(elementID + ' ' + '.next1').show();
                $(elementID + ' ' + '.prev').hide();
                $(elementID + ' ' + '.prev1').hide();
            }
            if (temp != start) {
                temp = temp - tableSectionWidth;

                $(elementID + ' ' + '.next').show();
                $(elementID + ' ' + '.next1').show();
                $(elementID + ' ' + '.prev').show();
                $(elementID + ' ' + '.prev1').show();
                $(".inner-content table th, .inner-content table td").css('transform', 'translateX(-' + (temp) + 'px)');

                if (temp == 0) {

                    $(elementID + ' ' + '.next').show();
                    $(elementID + ' ' + '.next1').show();
                    $(elementID + ' ' + '.prev').hide();
                    $(elementID + ' ' + '.prev1').hide();
                }
            }
        }


        //Go Last Section Function
        function searchNextAll() {
            temp = tableWidth - tableSectionWidth;

            $(elementID + ' ' + '.next').hide();
            $(elementID + ' ' + '.next1').hide();
            $(elementID + ' ' + '.prev').show();
            $(elementID + ' ' + '.prev1').show();

            $(".inner-content table th, .inner-content table td").css('transform', 'translateX(-' + temp + 'px)');
        }

        //Go Last Section Function
        function searchPrevAll() {
            temp = 0;

            $(elementID + ' ' + '.next').show();
            $(elementID + ' ' + '.next1').show();
            $(elementID + ' ' + '.prev').hide();
            $(elementID + ' ' + '.prev1').hide();

            $(".inner-content table th, .inner-content table td").css('transform', 'translateX(-' + temp + 'px)');
        }
    }
})(window.Zepto || window.jQuery, window, document);