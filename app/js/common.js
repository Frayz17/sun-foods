
// Dots on the left of company-description-img
var dotDecor = document.getElementById('js_imgCompDescription_id');
var decorDotsHtml = '<div class="companyDescription-imgDotDecor"> ' +
                  ' <div class="dot"></div> ' +
                  ' <div class="dot"></div> ' +
                  ' <div class="dot"></div> ' +
                '</div>';
dotDecor.insertAdjacentHTML('afterend', decorDotsHtml);


// borders that overlaps company-description-img
var borderDecor = document.getElementById('js_sunFoodsBrandDesc_id');
var decorBordersHtml = '<div class="leftBorder"></div>' +
                '<div class="rightBorder"></div>';
borderDecor.insertAdjacentHTML('afterend', decorBordersHtml);