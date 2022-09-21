const string = prompt('Enter a string and this program will check for a palindrome: ');
var count = 0;

function check4vowel(string)
{
    var vowelsCount = 0;
    const vowels = ['a','e','i','o','u','y','A','E','I','O','U','Y'];
    for(let char of string)
    {
        if(vowels.includes(char))
        {
            vowelsCount++;
        }
    }
    return vowelsCount;
}

function check4Palin(string) 
{    
    const len = string.length;
    const lower = string.toLowerCase();
    for (let i = 0; i < len / 2; i++) 
    {

        if (lower[i] !== lower[len - 1 - i]) 
            {
                return false;
            }
    }
        return true;
}

if(check4Palin(string) == true)
    {
        ans = "is a palindrome";
        console.log(string,"contains",check4vowel(string),"vowels and", ans);
    }
else
    {
        ans = "is not a palindrome";
        console.log(string,"contains",check4vowel(string),"vowels and", ans);
    }
