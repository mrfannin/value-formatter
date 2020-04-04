function processList()
{
    let inputList = document.getElementById("sku-list");
    let formatList = document.getElementById("format-list");
    let outputList = document.getElementById("output");

    let inputContent = inputList.value;
    let formatContent = formatList.value;

    let skuSplit = inputContent.split("\n");
    let formatSplit = formatContent.split("\n");
    let outputSplit = [];

    let before = [];
    let after = [];

    for (let i = 0; i < formatSplit.length; i++)
    {
        before.push(formatSplit[i].match(/.+(?==)/));
        after.push(formatSplit[i].match(/(?<==).+/));
    }

    for (let i = 0; i < skuSplit.length; i++)
    {
        let curOutput = "";
        for (let n = 0; n < before.length; n++)
        {
            let regex = RegExp(before[n]);
            if (regex.test(skuSplit[i]))
            {
                if (curOutput != "")
                {
                    curOutput += ";";
                }
                curOutput += after[n];
            }
        }
        outputSplit.push(curOutput);
    }

    outputList.value = outputSplit.join("\n");
    
}

let button = document.getElementById("format-button");
button.addEventListener("click", processList, false);