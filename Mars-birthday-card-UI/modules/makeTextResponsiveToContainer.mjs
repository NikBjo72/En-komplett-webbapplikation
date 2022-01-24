
export function makeTextResponsiveToContainer(incommingBoxElementId, incomminTextElementId)
{
    let originalTextScaleValue = 0;
    let originalPaddingScaleValue = 0;

    function setSizeToText(boxElementId, textElementId)
    {
        let boxWith = document.getElementById(boxElementId).clientWidth;   
        let text = document.getElementById(textElementId);
        let fontSizeString = window.getComputedStyle(text, null).getPropertyValue('font-size');
        let paddingString = window.getComputedStyle(text, null).getPropertyValue('padding');
        let paddingStringArray = paddingString.split(" ");
        var fontSizeInt = parseFloat(fontSizeString);
        var paddingLeftInt = parseFloat(paddingStringArray[1]);

        if (originalTextScaleValue === 0)
        {
            originalTextScaleValue = fontSizeInt/boxWith;
        }
        if (originalPaddingScaleValue === 0)
        {
            originalPaddingScaleValue = paddingLeftInt/boxWith;
        }

        let newFontSize = boxWith * originalTextScaleValue;
        let newPadding = boxWith * originalPaddingScaleValue;
        text.style.fontSize = (newFontSize) + 'px';
        text.style.paddingLeft = (newPadding) + 'px';
        text.style.paddingRight = (newPadding) + 'px';
    }

    window.addEventListener("resize", function()
    {
        setSizeToText(incommingBoxElementId, incomminTextElementId)
    });
};