$(() => {

    // Section 1 sidebar hover 
        const $hover = $('.network')
    
        const appear = () => {
        $('.dis').css('display','inline')
        }
    
        // const disappear = () => {
        // $('.dis').css('display', 'none')
        
        // }
        // ** sidebar hover **
        $hover.on('click',appear)
    })
